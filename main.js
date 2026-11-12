import * as THREE from 'three';

// ============================================================================
// 1. SUBTLE UI AUDIO FEEDBACK (WEB AUDIO API)
// ============================================================================
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioCtx = new AudioCtx();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playSound(type = 'click') {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.045);
    } else if (type === 'zoom') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.11);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'success') {
      [440, 554.37, 659.25].forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(freq, now + idx * 0.05);
        g.gain.setValueAtTime(0.06, now + idx * 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.09);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(now + idx * 0.05);
        o.stop(now + idx * 0.05 + 0.1);
      });
    }
  } catch (_) {}
}

// ============================================================================
// 2. TOAST & COFFEE BOOST SYSTEM
// ============================================================================
let coffeeCups = 3;
const energyStatusBadge = document.getElementById('energy-status-badge');
const deskToast = document.getElementById('desk-toast');
const deskToastIcon = document.getElementById('desk-toast-icon');
const deskToastText = document.getElementById('desk-toast-text');
let toastTimeout = null;

const coffeeMessages = [
  'Fresh espresso poured — focus is back at 100%.',
  'Another cup down, zero bugs left standing.',
  'Caffeinated and ready to ship.',
  'Note to self: hydrate after this one.'
];

function showDeskToast(icon, text) {
  if (!deskToast || !deskToastIcon || !deskToastText) return;
  deskToastIcon.textContent = icon;
  deskToastText.textContent = text;
  deskToast.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    deskToast.classList.add('hidden');
  }, 3000);
}

function triggerCoffeeBoost() {
  coffeeCups += 1;
  playSound('success');
  if (energyStatusBadge) {
    energyStatusBadge.textContent = `Coffee today: ${coffeeCups} cups`;
  }
  if (rgbStripMat) {
    rgbStripMat.color.setHex(0x38bdf8);
    setTimeout(() => rgbStripMat.color.setHex(0x2563eb), 1500);
  }
  showDeskToast('☕', coffeeMessages[coffeeCups % coffeeMessages.length]);
}

// ============================================================================
// 3. INTERACTIVE 3D DESK (SCROLL-CHOREOGRAPHED + CLICKABLE)
// ============================================================================
const sceneEl = document.getElementById('scene');
const deskCanvas = document.getElementById('desk-canvas');
const hoverTooltip = document.getElementById('desk-hover-tooltip');

let scene, camera, renderer, studioRoot, rendererOpaque = false;
let ambientLight, keyLight, blueBackGlow, skyFillLight, lampSpotLight, lampBulbMat, rgbStripMat;
let floorMat, floorRingMat, deskTopMat, metalMat, deskMatMat, bezelMat, kbCaseMat;
let isLampOn = true;
let activeStation = 'overview';

// Base camera targets centered on each desk object
const cameraViews = {
  overview: { pos: new THREE.Vector3(-0.9, 4.15, 8.6), look: new THREE.Vector3(-1.95, 0.9, 0) },
  monitors: { pos: new THREE.Vector3(0.35, 2.25, 3.35), look: new THREE.Vector3(0.1, 1.65, -0.75) },
  portrait: { pos: new THREE.Vector3(-2.1, 2.05, 2.95), look: new THREE.Vector3(-2.35, 1.32, -0.42) },
  notebook: { pos: new THREE.Vector3(-1.55, 2.15, 2.55), look: new THREE.Vector3(-1.8, 0.92, 0.62) },
  keyboard: { pos: new THREE.Vector3(0.25, 2.35, 2.55), look: new THREE.Vector3(0.2, 0.9, 0.62) },
  arcade:   { pos: new THREE.Vector3(2.15, 2.2, 2.95), look: new THREE.Vector3(2.35, 1.4, -0.48) },
  phone:    { pos: new THREE.Vector3(2.15, 1.95, 2.75), look: new THREE.Vector3(2.35, 1.05, 0.68) }
};

function getResponsiveCameraView(stationKey = 'overview') {
  const base = cameraViews[stationKey] || cameraViews.overview;
  const w = sceneEl ? sceneEl.clientWidth : window.innerWidth;
  const h = sceneEl ? Math.max(1, sceneEl.clientHeight) : window.innerHeight;
  const aspect = w / h;
  const isMobile = w <= 900;

  const pos = base.pos.clone();
  const look = base.look.clone();

  if (isMobile) {
    // On mobile, #scene is full-screen with a compact hero card at the bottom; frame the full 3D desk in the upper area
    const portraitFactor = Math.min(2.1, Math.max(1.05, 1.15 / Math.max(aspect, 0.45)));
    if (stationKey === 'overview') {
      pos.set(0, 4.8 * (0.95 + portraitFactor * 0.22), 11.2 * (0.95 + portraitFactor * 0.26));
      look.set(0, -0.35, 0);
    } else {
      // Shift look target downward so the focused object sits cleanly in the top 38svh above the window sheet
      pos.set(base.look.x, base.pos.y + 0.25, base.pos.z + (portraitFactor - 0.7) * 1.25);
      look.set(base.look.x, base.look.y - 0.85, base.look.z);
    }
  } else {
    // On desktop, hero is on the left (overview -> desk on right); chapters are on the right (desk on left)
    if (stationKey !== 'overview') {
      const shiftX = Math.min(1.45, Math.max(0.85, aspect * 0.68));
      pos.x += shiftX * 0.65;
      look.x += shiftX;
    } else if (aspect < 1.35) {
      pos.z += 1.4;
      look.x = -0.8;
    }
  }

  return { pos, look };
}

const initialView = getResponsiveCameraView('overview');
const currentCamPos = new THREE.Vector3().copy(initialView.pos);
const currentCamLook = new THREE.Vector3().copy(initialView.look);
const targetCamPos = new THREE.Vector3().copy(initialView.pos);
const targetCamLook = new THREE.Vector3().copy(initialView.look);

const stationConfig = {
  monitors: {
    sectionId: 'projects',
    label: '<b>Monitors</b> · Selected work'
  },
  portrait: {
    sectionId: 'about',
    label: '<b>Portrait</b> · About me'
  },
  notebook: {
    sectionId: 'services',
    label: '<b>Client pad</b> · Services'
  },
  keyboard: {
    sectionId: 'skills',
    label: '<b>Keyboard</b> · Skills'
  },
  arcade: {
    sectionId: 'lab',
    label: '<b>Arcade</b> · Break room'
  },
  phone: {
    sectionId: 'contact',
    label: '<b>Phone</b> · Contact'
  },
  coffee: {
    sectionId: null,
    label: '<b>Espresso</b> · Refill coffee'
  },
  lamp: {
    sectionId: null,
    label: '<b>Desk lamp</b> · Toggle light'
  }
};

const clickableMeshes = [];
const steamParticles = [];

function createMonitorTexture(titleText, accentColor = '#38bdf8') {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 320;
  const ctx = c.getContext('2d');

  ctx.fillStyle = '#040b1a';
  ctx.fillRect(0, 0, 512, 320);

  ctx.fillStyle = '#0b1936';
  ctx.fillRect(0, 0, 512, 32);
  ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(16, 16, 4.5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(30, 16, 4.5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#38bdf8'; ctx.beginPath(); ctx.arc(44, 16, 4.5, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#93c5fd';
  ctx.font = '600 12px monospace';
  ctx.fillText(titleText, 66, 20);

  ctx.fillStyle = accentColor;
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('Faraj Alrmah // Frontend', 26, 72);

  const lineColors = ['#38bdf8', '#60a5fa', '#2563eb', '#93c5fd', '#7dd3fc'];
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = lineColors[i % lineColors.length];
    ctx.fillRect(26 + (i % 2) * 16, 98 + i * 22, 100 + ((i * 47) % 180), 8);
  }

  ctx.fillStyle = '#0f2552';
  ctx.fillRect(332, 55, 155, 220);
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(332, 55, 155, 220);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText('WORK', 382, 150);
  ctx.fillStyle = accentColor;
  ctx.fillText('SCROLL OR CLICK', 345, 176);

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function registerStationGroup(group, key, withHitBox = true) {
  group.traverse((child) => {
    if (child.isMesh) {
      child.userData.station = key;
      clickableMeshes.push(child);
    }
  });

  if (!withHitBox) return;

  const box = new THREE.Box3().setFromObject(group);
  if (!box.isEmpty()) {
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    group.worldToLocal(center);

    const hitGeo = new THREE.BoxGeometry(
      Math.max(0.38, size.x + 0.08),
      Math.max(0.38, size.y + 0.08),
      Math.max(0.38, size.z + 0.08)
    );
    const hitMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    hitMesh.position.copy(center);
    hitMesh.userData.station = key;
    hitMesh.userData.isHitBox = true;
    group.add(hitMesh);
    clickableMeshes.push(hitMesh);
  }
}

function initDesk3D() {
  if (!deskCanvas || !sceneEl) return;

  scene = new THREE.Scene();
  const initW = Math.max(1, sceneEl.clientWidth || window.innerWidth);
  const initH = Math.max(1, sceneEl.clientHeight || window.innerHeight);
  const initialAspect = initW / initH;
  camera = new THREE.PerspectiveCamera(
    initialAspect < 0.85 ? 47 : 39,
    initialAspect,
    0.1,
    100
  );
  const startView = getResponsiveCameraView('overview');
  currentCamPos.copy(startView.pos);
  currentCamLook.copy(startView.look);
  targetCamPos.copy(startView.pos);
  targetCamLook.copy(startView.look);
  camera.position.copy(currentCamPos);
  camera.lookAt(currentCamLook);

  const rendererConfigs = [
    { canvas: deskCanvas, antialias: true, alpha: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false },
    { canvas: deskCanvas, antialias: true, alpha: true, failIfMajorPerformanceCaveat: false },
    { canvas: deskCanvas, antialias: false, alpha: false, failIfMajorPerformanceCaveat: false }
  ];

  for (let i = 0; i < rendererConfigs.length; i++) {
    try {
      renderer = new THREE.WebGLRenderer(rendererConfigs[i]);
      rendererOpaque = !rendererConfigs[i].alpha;
      break;
    } catch (_) {
      renderer = null;
    }
  }

  if (!renderer) {
    console.warn('WebGL unavailable; rendering 2D interactive desk fallback.');
    const fallbackWrap = document.createElement('div');
    fallbackWrap.id = 'desk-2d-fallback';
    fallbackWrap.style.cssText = 'position:fixed;inset:var(--nav-h) 0 0 0;display:flex;justify-content:flex-end;align-items:center;padding:2rem clamp(1rem,4vw,4rem);pointer-events:none;z-index:5;';
    fallbackWrap.innerHTML = `
      <div class="panel" style="opacity:1;transform:none;width:min(480px,42vw);pointer-events:auto;">
        <div class="chapter-tag"><span class="num">2D</span><span class="sep"></span>Interactive Desk</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem;">
          <button type="button" data-fallback-st="monitors" class="btn-secondary" style="justify-content:flex-start;">🖥️ Work · Monitors</button>
          <button type="button" data-fallback-st="portrait" class="btn-secondary" style="justify-content:flex-start;">👤 About · Portrait</button>
          <button type="button" data-fallback-st="notebook" class="btn-secondary" style="justify-content:flex-start;">💼 Services · Pad</button>
          <button type="button" data-fallback-st="keyboard" class="btn-secondary" style="justify-content:flex-start;">⌨️ Skills · Keyboard</button>
          <button type="button" data-fallback-st="arcade" class="btn-secondary" style="justify-content:flex-start;">🕹️ Lab · Arcade</button>
          <button type="button" data-fallback-st="phone" class="btn-secondary" style="justify-content:flex-start;">📱 Contact · Phone</button>
        </div>
        <p style="margin:0;font-size:12px;color:var(--dim);">3D view is off because WebGL is disabled in this browser.</p>
      </div>`;
    sceneEl.appendChild(fallbackWrap);
    fallbackWrap.querySelectorAll('[data-fallback-st]').forEach((btn) => {
      btn.addEventListener('click', () => handleDeskStationClick(btn.getAttribute('data-fallback-st')));
    });
    return;
  }

  if (rendererOpaque) {
    scene.background = new THREE.Color(document.documentElement.classList.contains('light') ? 0xe2e8f0 : 0x071430);
  }

  deskCanvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
  });

  renderer.setSize(initW, initH);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Lighting
  ambientLight = new THREE.AmbientLight(0xdbeafe, 0.95);
  scene.add(ambientLight);

  keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
  keyLight.position.set(5, 8, 6);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  blueBackGlow = new THREE.PointLight(0x2563eb, 3.8, 14);
  blueBackGlow.position.set(0, 2.3, -2.1);
  scene.add(blueBackGlow);

  skyFillLight = new THREE.PointLight(0x0ea5e9, 2.6, 13);
  skyFillLight.position.set(3.5, 2.5, 1.5);
  scene.add(skyFillLight);

  lampSpotLight = new THREE.SpotLight(0xfef08a, 4.2, 11, Math.PI / 3.1, 0.5, 1);
  lampSpotLight.position.set(-2.78, 2.7, -0.45);
  lampSpotLight.target.position.set(-0.5, 0.8, 0.2);
  lampSpotLight.castShadow = true;
  scene.add(lampSpotLight);
  scene.add(lampSpotLight.target);

  studioRoot = new THREE.Group();
  scene.add(studioRoot);

  // Studio Platform
  floorMat = new THREE.MeshStandardMaterial({ color: 0x061229, roughness: 0.65, metalness: 0.25 });
  const floorMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(5.5, 5.8, 0.22, 48),
    floorMat
  );
  floorMesh.position.y = -0.9;
  floorMesh.receiveShadow = true;
  studioRoot.add(floorMesh);

  floorRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
  const floorRing = new THREE.Mesh(
    new THREE.RingGeometry(5.35, 5.48, 48),
    floorRingMat
  );
  floorRing.rotation.x = -Math.PI / 2;
  floorRing.position.y = -0.78;
  studioRoot.add(floorRing);

  // Desk Surface
  deskTopMat = new THREE.MeshStandardMaterial({ color: 0x0f2142, roughness: 0.35, metalness: 0.28 });
  const deskTop = new THREE.Mesh(
    new THREE.BoxGeometry(6.8, 0.2, 3.1),
    deskTopMat
  );
  deskTop.position.set(0, 0.75, 0);
  deskTop.castShadow = true;
  deskTop.receiveShadow = true;
  studioRoot.add(deskTop);

  // Rear LED Accent Bar
  rgbStripMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const rgbBar = new THREE.Mesh(new THREE.BoxGeometry(6.72, 0.055, 0.055), rgbStripMat);
  rgbBar.position.set(0, 0.81, -1.52);
  studioRoot.add(rgbBar);

  // Desk Legs
  metalMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.75, roughness: 0.28 });
  [[-3.1, -0.05, -1.25], [3.1, -0.05, -1.25], [-3.1, -0.05, 1.25], [3.1, -0.05, 1.25]].forEach(([x, y, z]) => {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.55, 0.16), metalMat);
    leg.position.set(x, y, z);
    studioRoot.add(leg);
  });

  // Desk Mat
  deskMatMat = new THREE.MeshStandardMaterial({ color: 0x07142b, roughness: 0.85 });
  const deskMatMesh = new THREE.Mesh(
    new THREE.BoxGeometry(3.4, 0.02, 1.28),
    deskMatMat
  );
  deskMatMesh.position.set(0, 0.86, 0.58);
  studioRoot.add(deskMatMesh);

  // 1. DUAL MONITORS ('monitors' -> #projects)
  const monitorsGroup = new THREE.Group();
  const shelf = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.12, 0.66), metalMat);
  shelf.position.set(0, 0.92, -0.78);
  monitorsGroup.add(shelf);

  bezelMat = new THREE.MeshStandardMaterial({ color: 0x050c1a, roughness: 0.3, metalness: 0.6 });
  const mainMonitor = new THREE.Mesh(new THREE.BoxGeometry(2.05, 1.2, 0.08), bezelMat);
  mainMonitor.position.set(0.35, 1.78, -0.75);
  mainMonitor.castShadow = true;
  monitorsGroup.add(mainMonitor);

  const screen1 = new THREE.Mesh(
    new THREE.PlaneGeometry(1.94, 1.08),
    new THREE.MeshBasicMaterial({ map: createMonitorTexture('projects.tsx', '#38bdf8') })
  );
  screen1.position.set(0.35, 1.78, -0.705);
  monitorsGroup.add(screen1);

  const neck1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.6, 0.09), metalMat);
  neck1.position.set(0.35, 1.26, -0.8);
  monitorsGroup.add(neck1);

  const leftMon = new THREE.Group();
  leftMon.position.set(-1.28, 1.72, -0.58);
  leftMon.rotation.y = 0.28;
  leftMon.add(new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.98, 0.07), bezelMat));
  const screen2 = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 0.88),
    new THREE.MeshBasicMaterial({ map: createMonitorTexture('ui_system.ts', '#60a5fa') })
  );
  screen2.position.z = 0.04;
  leftMon.add(screen2);
  monitorsGroup.add(leftMon);

  studioRoot.add(monitorsGroup);
  registerStationGroup(monitorsGroup, 'monitors');

  // 2. MECHANICAL KEYBOARD & MOUSE ('keyboard' -> #skills)
  const kbGroup = new THREE.Group();
  kbCaseMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.6, roughness: 0.3 });
  const kbCase = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.08, 0.48),
    kbCaseMat
  );
  kbCase.position.set(0.15, 0.9, 0.62);
  kbCase.rotation.x = 0.07;
  kbGroup.add(kbCase);

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 11; c++) {
      const isBlueKey = (r === 0 && c === 0) || (r === 3 && c === 5) || (r === 1 && c === 2);
      const keyCap = new THREE.Mesh(
        new THREE.BoxGeometry(0.085, 0.045, 0.082),
        new THREE.MeshStandardMaterial({ color: isBlueKey ? 0x38bdf8 : 0xe0f2fe, roughness: 0.3 })
      );
      keyCap.position.set(-0.38 + c * 0.106, 0.955 - r * 0.006, 0.46 + r * 0.102);
      kbGroup.add(keyCap);
    }
  }

  const mouse = new THREE.Mesh(
    new THREE.BoxGeometry(0.21, 0.08, 0.34),
    new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.5, roughness: 0.3 })
  );
  mouse.position.set(0.98, 0.9, 0.62);
  kbGroup.add(mouse);

  studioRoot.add(kbGroup);
  registerStationGroup(kbGroup, 'keyboard');

  // 3. CLIENT PAD ('notebook' -> #services)
  const notebookGroup = new THREE.Group();
  notebookGroup.position.set(-1.85, 0.9, 0.62);
  notebookGroup.rotation.y = 0.18;

  const padBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.82, 0.06, 0.58),
    new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.3, metalness: 0.5 })
  );
  notebookGroup.add(padBase);

  const padScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.72, 0.48),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  padScreen.rotation.x = -Math.PI / 2;
  padScreen.position.y = 0.032;
  notebookGroup.add(padScreen);

  studioRoot.add(notebookGroup);
  registerStationGroup(notebookGroup, 'notebook');

  // 4. PORTRAIT FRAME & TROPHY ('portrait' -> #about)
  const portraitGroup = new THREE.Group();
  portraitGroup.position.set(-2.45, 0.86, -0.45);
  portraitGroup.rotation.y = 0.35;

  const frameBoard = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.92, 0.06), bezelMat);
  frameBoard.position.y = 0.48;
  portraitGroup.add(frameBoard);

  new THREE.TextureLoader().load('./images/farajimage.png', (tex) => {
    const imgMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.8), new THREE.MeshBasicMaterial({ map: tex }));
    imgMesh.position.set(0, 0.48, 0.035);
    portraitGroup.add(imgMesh);
  });

  const trophyCup = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.19, 0),
    new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.85, roughness: 0.15 })
  );
  trophyCup.position.set(0.58, 0.42, 0.12);
  portraitGroup.add(trophyCup);

  const trophyPedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.2, 16), metalMat);
  trophyPedestal.position.set(0.58, 0.1, 0.12);
  portraitGroup.add(trophyPedestal);

  studioRoot.add(portraitGroup);
  registerStationGroup(portraitGroup, 'portrait');

  // 5. BLUE ARCADE MACHINE ('arcade' -> #lab)
  const arcadeGroup = new THREE.Group();
  arcadeGroup.position.set(2.38, 0.86, -0.48);
  arcadeGroup.rotation.y = -0.35;

  const cab = new THREE.Mesh(
    new THREE.BoxGeometry(0.76, 1.15, 0.66),
    new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.3, metalness: 0.35 })
  );
  cab.position.y = 0.58;
  arcadeGroup.add(cab);

  const cabScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.58, 0.46),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  cabScreen.position.set(0, 0.7, 0.34);
  arcadeGroup.add(cabScreen);

  studioRoot.add(arcadeGroup);
  registerStationGroup(arcadeGroup, 'arcade');

  // 6. COFFEE MUG ('coffee' -> Coffee Boost)
  const coffeeGroup = new THREE.Group();
  coffeeGroup.position.set(1.55, 0.86, 0.62);

  const mug = new THREE.Mesh(
    new THREE.CylinderGeometry(0.17, 0.14, 0.34, 24),
    new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 })
  );
  mug.position.y = 0.17;
  coffeeGroup.add(mug);

  for (let i = 0; i < 3; i++) {
    const sp = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xe0f2fe, transparent: true, opacity: 0.45 })
    );
    sp.position.set((i - 1) * 0.04, 0.44 + i * 0.12, 0);
    sp.userData.offset = i * 1.7;
    coffeeGroup.add(sp);
    steamParticles.push(sp);
  }

  studioRoot.add(coffeeGroup);
  registerStationGroup(coffeeGroup, 'coffee');

  // 7. SMARTPHONE DOCK ('phone' -> #contact)
  const phoneGroup = new THREE.Group();
  phoneGroup.position.set(2.38, 0.86, 0.68);
  phoneGroup.rotation.y = -0.28;

  const dock = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.07, 24), metalMat);
  dock.position.y = 0.035;
  phoneGroup.add(dock);

  const phone = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.6, 0.045), bezelMat);
  phone.position.set(0, 0.32, 0);
  phone.rotation.x = -0.25;
  phoneGroup.add(phone);

  const phoneScr = new THREE.Mesh(
    new THREE.PlaneGeometry(0.28, 0.54),
    new THREE.MeshBasicMaterial({ color: 0x0ea5e9 })
  );
  phoneScr.position.set(0, 0.32, 0.025);
  phoneScr.rotation.x = -0.25;
  phoneGroup.add(phoneScr);

  studioRoot.add(phoneGroup);
  registerStationGroup(phoneGroup, 'phone');

  // 8. DESK LAMP ('lamp' -> Toggle Light)
  const lampGroup = new THREE.Group();
  lampGroup.position.set(-3.02, 0.86, -0.58);

  const lBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.27, 0.07, 24), metalMat);
  lBase.position.y = 0.035;
  lampGroup.add(lBase);

  const lPost = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.35, 12), metalMat);
  lPost.position.y = 0.68;
  lampGroup.add(lPost);

  const lHead = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.38, 24), metalMat);
  lHead.position.set(0.22, 1.38, 0.12);
  lHead.rotation.z = -0.5;
  lampGroup.add(lHead);

  lampBulbMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
  const lBulb = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 14), lampBulbMat);
  lBulb.position.set(0.26, 1.26, 0.12);
  lampGroup.add(lBulb);

  studioRoot.add(lampGroup);
  registerStationGroup(lampGroup, 'lamp', false);

  // --- RAYCASTING + TOOLTIP + SUBTLE DRAG ROTATION ---
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let isDragging = false;
  let dragDistance = 0;
  let prevX = 0;
  let prevY = 0;
  let targetRotY = 0;

  deskCanvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    dragDistance = 0;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  deskCanvas.addEventListener('pointermove', (e) => {
    const rect = deskCanvas.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    pointer.x = (localX / rect.width) * 2 - 1;
    pointer.y = -(localY / rect.height) * 2 + 1;

    if (isDragging && activeStation === 'overview') {
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      dragDistance += Math.hypot(dx, dy);
      targetRotY = Math.max(-0.45, Math.min(0.45, targetRotY + dx * 0.004));
      prevX = e.clientX;
      prevY = e.clientY;
      hoverTooltip?.classList.remove('visible');
      return;
    }

    if (e.pointerType === 'touch') return;

    const now = performance.now();
    if (now - (deskCanvas._lastHoverCheck || 0) < 28) return;
    deskCanvas._lastHoverCheck = now;

    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(clickableMeshes, false);
    if (hits.length > 0) {
      const chosenHit = hits.find((h) => !h.object.userData.isHitBox) || hits[0];
      const st = chosenHit.object.userData.station;
      deskCanvas.classList.add('hovering-object');
      if (hoverTooltip && st && stationConfig[st]) {
        hoverTooltip.innerHTML = stationConfig[st].label;
        hoverTooltip.style.left = `${Math.min(rect.width - 110, Math.max(110, localX))}px`;
        hoverTooltip.style.top = `${Math.max(48, localY)}px`;
        hoverTooltip.classList.add('visible');
      }
    } else {
      deskCanvas.classList.remove('hovering-object');
      hoverTooltip?.classList.remove('visible');
    }
  });

  deskCanvas.addEventListener('pointerleave', () => {
    isDragging = false;
    hoverTooltip?.classList.remove('visible');
  });

  window.addEventListener('pointerup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const maxTapMove = e.pointerType === 'touch' ? 16 : 7;
    if (dragDistance > maxTapMove) return;

    const rect = deskCanvas.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;

    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(clickableMeshes, false);
    if (hits.length > 0) {
      const chosenHit = hits.find((h) => !h.object.userData.isHitBox) || hits[0];
      const st = chosenHit.object.userData.station;
      if (st) handleDeskStationClick(st);
    }
  });

  window.addEventListener('resize', resizeDeskRenderer);
  window.addEventListener('orientationchange', () => setTimeout(resizeDeskRenderer, 120));
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => resizeDeskRenderer());
    ro.observe(sceneEl);
  }

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (activeStation !== 'overview') {
      targetRotY = 0;
    }
    studioRoot.rotation.y += (targetRotY - studioRoot.rotation.y) * 0.075;

    currentCamPos.lerp(targetCamPos, 0.085);
    currentCamLook.lerp(targetCamLook, 0.095);
    camera.position.copy(currentCamPos);
    camera.lookAt(currentCamLook);

    steamParticles.forEach((sp) => {
      const cycle = (t * 0.4 + sp.userData.offset) % 1;
      sp.position.y = 0.4 + cycle * 0.4;
      sp.material.opacity = (1 - cycle) * 0.45;
    });

    try {
      renderer.render(scene, camera);
    } catch (_) {
      renderer.shadowMap.enabled = false;
      try { renderer.render(scene, camera); } catch (__) {}
    }
  }
  animate();
}

function resizeDeskRenderer() {
  if (!sceneEl || !renderer || !camera) return;
  const w = Math.max(1, sceneEl.clientWidth);
  const h = Math.max(1, sceneEl.clientHeight);
  camera.aspect = w / h;
  camera.fov = camera.aspect < 0.85 ? 47 : 39;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);

  const view = getResponsiveCameraView(activeStation);
  targetCamPos.copy(view.pos);
  targetCamLook.copy(view.look);
}

// ============================================================================
// 4. SCROLL-CHOREOGRAPHED NAVIGATION & DESK CLICKS
// ============================================================================
const siteNav = document.getElementById('site-nav');
const chapters = Array.from(document.querySelectorAll('.chapter'));
const navLinks = Array.from(document.querySelectorAll('[data-nav]'));
const railLinks = Array.from(document.querySelectorAll('[data-rail]'));

function toggleLampLight() {
  isLampOn = !isLampOn;
  if (lampSpotLight) lampSpotLight.intensity = isLampOn ? 4.2 : 0;
  if (lampBulbMat) lampBulbMat.color.setHex(isLampOn ? 0xfef08a : 0x1e3a8a);
  playSound('click');
  showDeskToast('💡', isLampOn ? 'Desk lamp switched on.' : 'Lamp off — night mode.');
}

const mobileWindowBar = document.getElementById('mobile-window-bar');
const mobileWinTitle = document.getElementById('mobile-win-title');
const mobileBackDeskBtn = document.getElementById('mobile-back-desk-btn');

const sectionTitles = {
  projects: '01 · Selected work',
  about: '02 · About me',
  services: '03 · Services',
  skills: '04 · Skills',
  lab: '05 · Break room',
  contact: '06 · Contact'
};

function closeDesktopWindow() {
  document.body.classList.remove('desktop-window-open');
  chapters.forEach((ch) => {
    ch.classList.remove('desktop-active');
    if (ch.id === 'top') ch.classList.add('in-view');
  });
  activeStation = 'overview';
  const view = getResponsiveCameraView('overview');
  targetCamPos.copy(view.pos);
  targetCamLook.copy(view.look);
  if (sceneEl) sceneEl.style.setProperty('--shade', '0');
  navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('data-nav') === 'top'));
  railLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('data-rail') === 'top'));
}

function openSection(sectionId, withZoomDelay = false) {
  if (!sectionId || sectionId === 'top') {
    closeMobileWindow();
    closeDesktopWindow();
    return;
  }

  const targetEl = document.getElementById(sectionId);
  if (!targetEl) return;

  if (window.innerWidth <= 900) {
    const station = targetEl.getAttribute('data-station') || 'overview';
    activeStation = station;
    const view = getResponsiveCameraView(station);
    targetCamPos.copy(view.pos);
    targetCamLook.copy(view.look);
    playSound('zoom');

    const revealWindow = () => {
      chapters.forEach((ch) => ch.classList.toggle('mobile-active', ch.id === sectionId));
      document.body.classList.add('mobile-window-open');
      mobileWindowBar?.classList.remove('hidden');
      if (mobileWinTitle) mobileWinTitle.textContent = sectionTitles[sectionId] || '';
      targetEl.scrollTop = 0;
      document.getElementById('mobile-menu')?.classList.add('hidden');
    };

    if (withZoomDelay) {
      setTimeout(revealWindow, 260);
    } else {
      revealWindow();
    }
  } else {
    playSound('zoom');
    setActiveChapter(targetEl);
    chapters.forEach((ch) => {
      const isTarget = ch.id === sectionId;
      ch.classList.toggle('desktop-active', isTarget);
      if (isTarget) ch.classList.add('in-view');
    });
    document.body.classList.add('desktop-window-open');
    const panelEl = targetEl.querySelector('.panel');
    if (panelEl) panelEl.scrollTop = 0;
  }
}

function closeMobileWindow() {
  document.body.classList.remove('mobile-window-open');
  mobileWindowBar?.classList.add('hidden');
  chapters.forEach((ch) => ch.classList.remove('mobile-active'));
  activeStation = 'overview';
  const view = getResponsiveCameraView('overview');
  targetCamPos.copy(view.pos);
  targetCamLook.copy(view.look);
  document.getElementById('mobile-menu')?.classList.add('hidden');
}

mobileBackDeskBtn?.addEventListener('click', () => {
  playSound('click');
  closeMobileWindow();
});

document.querySelectorAll('[data-station-pill]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const st = btn.getAttribute('data-station-pill');
    if (st) handleDeskStationClick(st);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href')?.slice(1);
    if (!id) return;
    e.preventDefault();
    openSection(id, false);
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileWindow();
    closeDesktopWindow();
  }
});

function handleDeskStationClick(stationKey) {
  if (stationKey === 'lamp') {
    toggleLampLight();
    return;
  }
  if (stationKey === 'coffee') {
    triggerCoffeeBoost();
    return;
  }

  const cfg = stationConfig[stationKey];
  if (cfg && cfg.sectionId) {
    openSection(cfg.sectionId, true);
  }
}

function setActiveChapter(chapterEl) {
  if (!chapterEl || window.innerWidth <= 900) return;
  const id = chapterEl.id;
  const station = chapterEl.getAttribute('data-station') || 'overview';

  if (activeStation !== station) {
    activeStation = station;
    const view = getResponsiveCameraView(activeStation);
    targetCamPos.copy(view.pos);
    targetCamLook.copy(view.look);
  }

  if (sceneEl) {
    sceneEl.style.setProperty('--shade', station === 'overview' ? '0' : '1');
  }

  navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('data-nav') === id));
  railLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('data-rail') === id));
}

// Click-only navigation: no scroll-based section switching
if (window.innerWidth > 900) {
  setActiveChapter(document.getElementById('top'));
}

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ============================================================================
// 5. ABOUT STICKY NOTE CYCLER
// ============================================================================
const funFacts = [
  '"A good page should load before the coffee gets cold."',
  '"Tweaking one small UI detail usually means making sure every spacing and blue feels right."',
  '"Best feeling of the day: when a complex feature compiles cleanly on the first run."',
  '"Everything on this desk maps to a part of the page — scroll or click around."'
];

let funFactIdx = 0;
const nextFunFactBtn = document.getElementById('next-fun-fact-btn');
const funFactDisplay = document.getElementById('fun-fact-display');

nextFunFactBtn?.addEventListener('click', () => {
  playSound('click');
  funFactIdx = (funFactIdx + 1) % funFacts.length;
  if (funFactDisplay) funFactDisplay.textContent = funFacts[funFactIdx];
});

// ============================================================================
// 6. SKILLS MATRIX (KEYBOARD INTERACTIVE)
// ============================================================================
const techSkills = [
  {
    key: '1',
    short: 'JS',
    title: 'JavaScript (ES6+)',
    category: '01 · Core language',
    pct: 96,
    desc: 'Interactive application logic, async API integrations, and clean modular architecture.'
  },
  {
    key: '2',
    short: 'REACT',
    title: 'React.js',
    category: '02 · UI engineering',
    pct: 94,
    desc: 'Component-driven interfaces, custom hooks, state management, and fast single-page apps.'
  },
  {
    key: '3',
    short: 'NEXT',
    title: 'Next.js',
    category: '03 · Frameworks',
    pct: 90,
    desc: 'Server-rendered and static web platforms tuned for speed, SEO, and scalability.'
  },
  {
    key: '4',
    short: 'TS',
    title: 'TypeScript',
    category: '04 · Type safety',
    pct: 89,
    desc: 'Strict type contracts and predictable data structures for maintainable codebases.'
  },
  {
    key: '5',
    short: 'TW',
    title: 'Tailwind CSS',
    category: '05 · Design systems',
    pct: 98,
    desc: 'Pixel-accurate responsive layouts, custom color tokens, and consistent spacing.'
  },
  {
    key: '6',
    short: 'UI/UX',
    title: 'Interactive UI & Motion',
    category: '06 · Experience',
    pct: 93,
    desc: 'Subtle micro-interactions, intuitive navigation flows, and visual polish.'
  },
  {
    key: '7',
    short: 'HTML/CSS',
    title: 'HTML5 & CSS3',
    category: '07 · Web standards',
    pct: 98,
    desc: 'Semantic markup, Flexbox/Grid layouts, and cross-browser compatibility.'
  },
  {
    key: '8',
    short: 'GIT',
    title: 'Git, APIs & Speed',
    category: '08 · Workflow',
    pct: 95,
    desc: 'Version control with Git/GitHub, REST API integration, and performance tuning.'
  }
];

let activeSkillIdx = 0;
const techCubesGrid = document.getElementById('tech-cubes-grid');
const hudBadge = document.getElementById('hud-skill-badge');
const hudCategory = document.getElementById('hud-skill-category');
const hudTitle = document.getElementById('hud-skill-title');
const hudDesc = document.getElementById('hud-skill-desc');
const hudPct = document.getElementById('hud-skill-pct');
const hudBar = document.getElementById('hud-skill-bar');

function selectTechModule(idx, withSound = true) {
  const item = techSkills[idx];
  if (!item) return;
  activeSkillIdx = idx;
  if (withSound) playSound('click');

  if (hudBadge) hudBadge.textContent = item.short;
  if (hudCategory) hudCategory.textContent = item.category;
  if (hudTitle) hudTitle.textContent = item.title;
  if (hudDesc) hudDesc.textContent = item.desc;
  if (hudPct) hudPct.textContent = `${item.pct}%`;
  if (hudBar) hudBar.style.width = `${item.pct}%`;

  document.querySelectorAll('.skill-module-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
}

function renderTechSkillsGrid() {
  if (!techCubesGrid) return;
  techCubesGrid.innerHTML = techSkills.map((item, idx) => `
    <button type="button" data-idx="${idx}" class="skill-module-btn ${idx === activeSkillIdx ? 'active' : ''}">
      <kbd>${item.key}</kbd>
      <span class="t">${item.title}</span>
      <span class="p">${item.pct}%</span>
    </button>
  `).join('');

  techCubesGrid.querySelectorAll('.skill-module-btn').forEach((btn) => {
    btn.addEventListener('click', () => selectTechModule(parseInt(btn.getAttribute('data-idx') || '0', 10)));
  });
}

window.addEventListener('keydown', (e) => {
  const tag = document.activeElement?.tagName?.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
  if (e.key >= '1' && e.key <= '8') {
    selectTechModule(parseInt(e.key, 10) - 1);
  }
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
    e.preventDefault();
    openStudioModal();
  }
});

// ============================================================================
// 7. PROJECTS SHOWCASE + CLAP COUNTER + IN-SITE STUDIO CMS
// ============================================================================
const STORAGE_KEY = 'faraj_portfolio_projects_en_v1';
const MESSAGES_STORAGE_KEY = 'faraj_portfolio_messages_v1';
const PIN_STORAGE_KEY = 'faraj_studio_pin_v1';
const STUDIO_UNLOCK_KEY = 'faraj_studio_unlocked';
let studioPin = localStorage.getItem(PIN_STORAGE_KEY) || '2026';

async function loadStudioSettings() {
  try {
    const res = await fetch('/api/settings');
    if (res.ok) {
      const data = await res.json();
      if (data && data.pin) {
        studioPin = String(data.pin);
        localStorage.setItem(PIN_STORAGE_KEY, studioPin);
      }
    }
  } catch (_) {}
}
loadStudioSettings();

const defaultProjects = [
  {
    id: 'proj-portfolio',
    title: 'Interactive Developer Portfolio & CMS',
    category: 'web development',
    categoryLabel: 'Frontend & Interactive UI',
    description: 'A modern interactive developer portfolio featuring a virtual workspace desk, project scope estimator, and a built-in content management system to add and edit projects directly.',
    tags: ['JavaScript', 'Tailwind CSS', 'Interactive UI', 'Vite'],
    image: './images/portfolio-cover.svg',
    github: 'https://github.com/farajnaser/myWebSite',
    link: 'https://farajnaser.github.io/myWebSite',
    accent: '#2563eb',
    claps: 48
  },
  {
    id: 'proj-taallam',
    title: "Ta'allam Educational Platform",
    category: 'web development',
    categoryLabel: 'EdTech Platform',
    description: 'Developed a responsive, high-performance educational platform using HTML5, CSS3, and JavaScript, focusing on user-centered UI/UX and seamless course navigation.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design'],
    image: './images/learning-cover.svg',
    github: 'https://github.com/farajnaser/EduWebProject',
    link: 'https://farajnaser.github.io/EduWebProject/',
    accent: '#0ea5e9',
    claps: 39
  },
  {
    id: 'proj-library',
    title: 'College Digital Library System',
    category: 'web development',
    categoryLabel: 'Full-Stack Web System',
    description: 'Designed and engineered a full-featured web platform for the College of Electronic Technology using HTML, CSS, JavaScript, and PHP for dynamic book cataloging and student search.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    image: './images/library-cover.svg',
    github: 'https://github.com/farajnaser/phpProject0',
    link: 'https://github.com/farajnaser/phpProject0',
    accent: '#3b82f6',
    claps: 34
  }
];

let projects = [...defaultProjects];
let studioUnlocked = sessionStorage.getItem(STUDIO_UNLOCK_KEY) === 'true';
let currentFilter = 'all';
let currentPage = 1;
const projectsPerPage = 4;

const projectsGrid = document.getElementById('projects-grid');
const paginationContainer = document.getElementById('project-pagination');
const filterBtns = document.querySelectorAll('.filter-btn');
const studioActiveBanner = document.getElementById('studio-active-banner');
const studioSyncStatus = document.getElementById('studio-sync-status');

async function loadInitialProjects() {
  const cached = localStorage.getItem(STORAGE_KEY);
  try {
    const res = await fetch('./projects.json', { cache: 'no-store' });
    if (res.ok) {
      const fileProjects = await res.json();
      if (Array.isArray(fileProjects) && fileProjects.length > 0) {
        projects = fileProjects;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        renderProjects(currentFilter);
        return;
      }
    }
  } catch (_) {}

  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) projects = parsed;
    } catch (_) {}
  }
  renderProjects(currentFilter);
}

async function persistProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  try {
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projects })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.ok && Array.isArray(data.projects)) {
        projects = data.projects;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        if (studioSyncStatus) {
          studioSyncStatus.textContent = 'Saved to projects.json and browser storage.';
        }
      }
    }
  } catch (_) {
    if (studioSyncStatus) {
      studioSyncStatus.textContent = 'Saved to browser storage. Use Export for backup.';
    }
  }
  renderProjects(currentFilter);
}

function updateStudioUI() {
  if (studioUnlocked) {
    studioActiveBanner?.classList.remove('hidden');
  } else {
    studioActiveBanner?.classList.add('hidden');
  }
  renderProjects(currentFilter);
}

window.clapProject = (id) => {
  const proj = projects.find(p => p.id === id);
  if (!proj) return;
  proj.claps = (proj.claps || 25) + 1;
  playSound('success');
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  renderProjects(currentFilter);
};

function createProjectCard(project, indexInAll) {
  const clapsCount = project.claps || 30;
  const numStr = String(indexInAll + 1).padStart(2, '0');

  const ownerBar = studioUnlocked ? `
    <div class="owner-bar">
      <span>#${numStr}</span>
      <div class="flex items-center gap-1.5">
        <button onclick="window.moveProject(${indexInAll}, -1)">←</button>
        <button onclick="window.moveProject(${indexInAll}, 1)">→</button>
        <button onclick="window.editProject('${project.id}')">Edit</button>
        <button onclick="window.deleteProject('${project.id}')" class="danger">Delete</button>
      </div>
    </div>
  ` : '';

  return `
    <article class="work-item">
      ${ownerBar}
      <a href="${project.link || project.github || '#'}" target="_blank" rel="noopener" class="work-thumb">
        <img src="${project.image || './images/portfolio-cover.svg'}" alt="${project.title}" onerror="this.src='./images/portfolio-cover.svg'" />
      </a>
      <div class="work-body">
        <div class="work-meta">
          <span><span class="idx">${numStr}</span> · ${project.categoryLabel || project.category}</span>
          <button onclick="window.clapProject('${project.id}')" class="clap-btn" title="Clap for this project">
            <span>👏</span><span>${clapsCount}</span>
          </button>
        </div>
        <h3 class="work-title">${project.title}</h3>
        <p class="work-desc">${project.description}</p>
        <ul class="tags">
          ${(project.tags || []).map(tag => `<li>${tag}</li>`).join('')}
        </ul>
        <div class="work-links">
          ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener">Live demo ↗</a>` : ''}
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener">Source code ↗</a>` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderPagination(totalItems) {
  if (!paginationContainer) return;
  const totalPages = Math.ceil(totalItems / projectsPerPage);
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button onclick="window.changePage(${i})" class="page-btn ${currentPage === i ? 'is-active' : ''}">
        ${i}
      </button>
    `;
  }
  paginationContainer.innerHTML = html;
}

window.changePage = (page) => {
  currentPage = page;
  renderProjects(currentFilter);
};

function renderProjects(filter = 'all') {
  if (!projectsGrid) return;
  currentFilter = filter;
  const filtered = filter === 'all'
    ? projects.map((p, idx) => ({ project: p, idx }))
    : projects.map((p, idx) => ({ project: p, idx })).filter(item => item.project.category === filter);

  const start = (currentPage - 1) * projectsPerPage;
  const paginated = filtered.slice(start, start + projectsPerPage);

  if (paginated.length === 0) {
    projectsGrid.innerHTML = `
      <div class="p-8 rounded-2xl border border-white/10 text-center">
        <p class="text-sm text-slate-400">No projects in this category yet.</p>
      </div>
    `;
  } else {
    projectsGrid.innerHTML = paginated.map(item => createProjectCard(item.project, item.idx)).join('');
  }
  renderPagination(filtered.length);
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    playSound('click');
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentPage = 1;
    renderProjects(btn.getAttribute('data-filter') || 'all');
  });
});

// ============================================================================
// 8. PROJECT ESTIMATOR + BUG SMASHER GAME + TERMINAL
// ============================================================================
const estChecks = document.querySelectorAll('.est-check');
const estResultText = document.getElementById('est-result-text');
const estApplyBtn = document.getElementById('est-apply-btn');

function updateEstimator() {
  let weeks = 1;
  const labels = [];
  estChecks.forEach((chk) => {
    if (chk.checked) {
      weeks += parseInt(chk.value || '1', 10);
      labels.push(chk.getAttribute('data-label'));
    }
  });
  if (estResultText) {
    estResultText.textContent = labels.length === 0
      ? 'Pick at least one item'
      : `About ${weeks}–${weeks + 2} weeks`;
  }
  return labels;
}

estChecks.forEach(c => c.addEventListener('change', () => {
  playSound('click');
  updateEstimator();
}));

estApplyBtn?.addEventListener('click', () => {
  const labels = updateEstimator();
  const subj = document.getElementById('subject');
  const msg = document.getElementById('message_text');
  if (subj) subj.value = 'New project scope';
  if (msg) {
    msg.value = `Hi Faraj,\n\nI'd like to discuss a project with:\n- ${labels.join('\n- ')}\n\nLet me know your availability.`;
  }
  openSection('contact');
});

// Interactive Terminal
const terminalForm = document.getElementById('terminal-form');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

function executeTerminalCmd(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd || !terminalOutput) return;
  playSound('click');

  if (cmd === 'clear') {
    terminalOutput.innerHTML = '<p class="text-slate-400">Console cleared.</p>';
    return;
  }

  let reply = '';
  if (cmd === 'whoami') {
    reply = 'Faraj Alrmah — Frontend developer based in Tripoli, Libya.';
  } else if (cmd === 'stack') {
    reply = 'JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS.';
  } else if (cmd === 'coffee') {
    triggerCoffeeBoost();
    reply = `Coffee refilled. Cups today: ${coffeeCups}`;
  } else if (cmd === 'joke') {
    reply = 'Why do programmers prefer dark mode? Because light attracts bugs.';
  } else if (cmd === 'contact') {
    reply = 'farajelrmahmoo@gmail.com · +218 92 261 3675';
  } else {
    reply = `Command "${raw}" not found. Try: whoami, stack, coffee, joke, contact, clear`;
  }

  const line = document.createElement('div');
  line.innerHTML = `<p class="text-sky-400">$ <span class="text-white">${raw}</span></p><p class="text-slate-300">${reply}</p>`;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!terminalInput) return;
  executeTerminalCmd(terminalInput.value);
  terminalInput.value = '';
});

document.querySelectorAll('.term-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const c = chip.getAttribute('data-cmd');
    if (c) executeTerminalCmd(c);
  });
});

// Bug Smasher Game
const bugArena = document.getElementById('bug-arena');
const bugStartOverlay = document.getElementById('bug-start-overlay');
const startBugGameBtn = document.getElementById('start-bug-game-btn');
const bugScoreEl = document.getElementById('bug-score');
const bugHighScoreEl = document.getElementById('bug-high-score');
const bugTimerEl = document.getElementById('bug-timer');

let bugScore = 0;
let bugHighScore = parseInt(localStorage.getItem('faraj-bug-high') || '0', 10);
if (bugHighScoreEl) bugHighScoreEl.textContent = String(bugHighScore);
let bugGameTimer = null;
let bugSpawner = null;
let bugSeconds = 20;

function spawnBugTarget() {
  if (!bugArena) return;
  const emojis = ['🐛', '🕷️', '🐞'];
  const bug = document.createElement('div');
  bug.className = 'bug-target';
  bug.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  const maxX = Math.max(40, bugArena.clientWidth - 52);
  const maxY = Math.max(40, bugArena.clientHeight - 52);
  bug.style.left = `${Math.floor(Math.random() * maxX)}px`;
  bug.style.top = `${Math.floor(Math.random() * maxY)}px`;

  bug.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    bugScore += 10;
    if (bugScoreEl) bugScoreEl.textContent = String(bugScore);
    if (bugScore > bugHighScore) {
      bugHighScore = bugScore;
      localStorage.setItem('faraj-bug-high', String(bugHighScore));
      if (bugHighScoreEl) bugHighScoreEl.textContent = String(bugHighScore);
    }
    playSound('click');
    bug.remove();
  });

  bugArena.appendChild(bug);
  setTimeout(() => { if (bug.parentElement) bug.remove(); }, 1350);
}

startBugGameBtn?.addEventListener('click', () => {
  playSound('success');
  bugScore = 0;
  bugSeconds = 20;
  if (bugScoreEl) bugScoreEl.textContent = '0';
  if (bugTimerEl) bugTimerEl.textContent = '20s';
  bugStartOverlay?.classList.add('hidden');
  bugArena?.querySelectorAll('.bug-target').forEach(b => b.remove());

  bugSpawner = setInterval(spawnBugTarget, 480);
  bugGameTimer = setInterval(() => {
    bugSeconds -= 1;
    if (bugTimerEl) bugTimerEl.textContent = `${bugSeconds}s`;
    if (bugSeconds <= 0) {
      clearInterval(bugSpawner);
      clearInterval(bugGameTimer);
      bugArena?.querySelectorAll('.bug-target').forEach(b => b.remove());
      if (bugStartOverlay) {
        bugStartOverlay.classList.remove('hidden');
        bugStartOverlay.querySelector('h4').textContent = `Time's up — ${bugScore} pts`;
        startBugGameBtn.textContent = 'Play again';
      }
      playSound('success');
    }
  }, 1000);
});

// ============================================================================
// 9. STUDIO CMS MODAL (PROJECTS + MESSAGES INBOX + CHANGE PIN)
// ============================================================================
const studioModal = document.getElementById('studio-modal');
const studioPinView = document.getElementById('studio-pin-view');
const studioEditorView = document.getElementById('studio-editor-view');
const studioPinForm = document.getElementById('studio-pin-form');
const studioPinInput = document.getElementById('studio-pin-input');
const studioPinError = document.getElementById('studio-pin-error');
const studioProjectForm = document.getElementById('studio-project-form');
const studioFormTitle = document.getElementById('studio-form-title');

const cmsTabProjects = document.getElementById('cms-tab-projects');
const cmsTabInbox = document.getElementById('cms-tab-inbox');
const cmsTabSecurity = document.getElementById('cms-tab-security');
const cmsPanelProjects = document.getElementById('cms-panel-projects');
const cmsPanelInbox = document.getElementById('cms-panel-inbox');
const cmsPanelSecurity = document.getElementById('cms-panel-security');
const inboxCountBadge = document.getElementById('inbox-count-badge');
const inboxMessagesList = document.getElementById('inbox-messages-list');

const projIdInput = document.getElementById('proj-id');
const projTitleInput = document.getElementById('proj-title');
const projCategoryInput = document.getElementById('proj-category');
const projCategoryLabelInput = document.getElementById('proj-category-label');
const projAccentInput = document.getElementById('proj-accent');
const projDescInput = document.getElementById('proj-desc');
const projTagsInput = document.getElementById('proj-tags');
const projImageUrlInput = document.getElementById('proj-image-url');
const projImageFileInput = document.getElementById('proj-image-file');
const projImagePreview = document.getElementById('proj-image-preview');
const projLinkInput = document.getElementById('proj-link');
const projGithubInput = document.getElementById('proj-github');
const generateCoverBtn = document.getElementById('generate-cover-btn');

let inboxMessages = [];

async function loadInboxMessages() {
  const cached = localStorage.getItem(MESSAGES_STORAGE_KEY);
  if (cached) {
    try { inboxMessages = JSON.parse(cached) || []; } catch (_) {}
  }
  try {
    const res = await fetch('/api/messages');
    if (res.ok) {
      const serverMsgs = await res.json();
      if (Array.isArray(serverMsgs) && serverMsgs.length > 0) {
        inboxMessages = serverMsgs;
        localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(inboxMessages));
      }
    }
  } catch (_) {}
  renderInboxMessages();
}

async function saveInboxMessage(newMessage) {
  inboxMessages.unshift(newMessage);
  localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(inboxMessages));
  try {
    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: inboxMessages })
    });
  } catch (_) {}
  renderInboxMessages();
}

function renderInboxMessages() {
  if (inboxCountBadge) inboxCountBadge.textContent = String(inboxMessages.length);
  if (!inboxMessagesList) return;

  if (inboxMessages.length === 0) {
    inboxMessagesList.innerHTML = `
      <div class="p-8 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center">
        <p class="font-semibold text-base mb-1">Your Inbox is Empty</p>
        <p class="text-xs text-slate-400">New messages sent from the Contact Form will appear right here automatically.</p>
      </div>
    `;
    return;
  }

  inboxMessagesList.innerHTML = inboxMessages.map((msg) => {
    const cleanPhone = String(msg.user_phone || '').replace(/[^0-9]/g, '');
    return `
      <div class="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-blue-500/20 pb-2">
          <div>
            <span class="font-semibold text-sm text-white">${msg.first_name || ''} ${msg.last_name || ''}</span>
            <span class="mono text-xs text-sky-400 ml-2">${msg.subject || 'Project Inquiry'}</span>
          </div>
          <span class="mono text-[11px] text-slate-400">${msg.date || ''}</span>
        </div>
        <p class="text-xs sm:text-sm text-blue-100/90 whitespace-pre-line leading-relaxed">${msg.message_text || ''}</p>
        <div class="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div class="mono text-xs text-sky-300 space-x-3">
            <span>✉️ ${msg.user_email || ''}</span>
            <span>📞 ${msg.user_phone || ''}</span>
          </div>
          <div class="flex items-center gap-2">
            <a href="mailto:${msg.user_email || ''}?subject=Re: ${encodeURIComponent(msg.subject || 'Your Inquiry')}" class="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold">
              Reply Email
            </a>
            ${cleanPhone ? `
              <a href="https://wa.me/${cleanPhone}" target="_blank" class="px-2.5 py-1 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold">
                WhatsApp
              </a>
            ` : ''}
            <button onclick="window.deleteInboxMessage('${msg.id}')" class="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-400 text-xs font-bold">
              Delete
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.deleteInboxMessage = async (id) => {
  inboxMessages = inboxMessages.filter(m => m.id !== id);
  localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(inboxMessages));
  try {
    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: inboxMessages })
    });
  } catch (_) {}
  renderInboxMessages();
};

document.getElementById('clear-inbox-btn')?.addEventListener('click', async () => {
  if (!confirm('Clear all messages from the inbox?')) return;
  inboxMessages = [];
  localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(inboxMessages));
  try {
    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [] })
    });
  } catch (_) {}
  renderInboxMessages();
});

function switchStudioTab(tabName) {
  playSound('click');
  cmsTabProjects?.classList.toggle('active', tabName === 'projects');
  cmsTabInbox?.classList.toggle('active', tabName === 'inbox');
  cmsTabSecurity?.classList.toggle('active', tabName === 'security');

  cmsPanelProjects?.classList.toggle('hidden', tabName !== 'projects');
  cmsPanelInbox?.classList.toggle('hidden', tabName !== 'inbox');
  cmsPanelSecurity?.classList.toggle('hidden', tabName !== 'security');
}

cmsTabProjects?.addEventListener('click', () => switchStudioTab('projects'));
cmsTabInbox?.addEventListener('click', () => {
  loadInboxMessages();
  switchStudioTab('inbox');
});
cmsTabSecurity?.addEventListener('click', () => switchStudioTab('security'));

function openStudioModal(projectToEdit = null) {
  playSound('click');
  studioModal?.classList.remove('hidden');
  if (!studioUnlocked) {
    studioPinView?.classList.remove('hidden');
    studioEditorView?.classList.add('hidden');
    studioPinError?.classList.add('hidden');
    if (studioPinInput) {
      studioPinInput.value = '';
      setTimeout(() => studioPinInput.focus(), 50);
    }
  } else {
    showProjectEditor(projectToEdit);
  }
}

function closeStudioModal() {
  studioModal?.classList.add('hidden');
}

function showProjectEditor(project = null) {
  studioPinView?.classList.add('hidden');
  studioEditorView?.classList.remove('hidden');
  switchStudioTab('projects');

  if (project) {
    if (studioFormTitle) studioFormTitle.textContent = 'Edit Project';
    projIdInput.value = project.id;
    projTitleInput.value = project.title || '';
    projCategoryInput.value = project.category || 'web development';
    projCategoryLabelInput.value = project.categoryLabel || 'Web Platform';
    projAccentInput.value = project.accent || '#2563eb';
    projDescInput.value = project.description || '';
    projTagsInput.value = (project.tags || []).join(', ');
    projImageUrlInput.value = project.image || './images/portfolio-cover.svg';
    if (projImagePreview) projImagePreview.src = project.image || './images/portfolio-cover.svg';
    projLinkInput.value = project.link || '';
    projGithubInput.value = project.github || '';
  } else {
    if (studioFormTitle) studioFormTitle.textContent = 'Add New Project';
    projIdInput.value = '';
    studioProjectForm?.reset();
    projImageUrlInput.value = './images/portfolio-cover.svg';
    if (projImagePreview) projImagePreview.src = './images/portfolio-cover.svg';
  }
}

studioPinForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (studioPinInput?.value.trim() === studioPin) {
    studioUnlocked = true;
    sessionStorage.setItem(STUDIO_UNLOCK_KEY, 'true');
    updateStudioUI();
    playSound('success');
    loadInboxMessages();
    showProjectEditor(null);
  } else {
    studioPinError?.classList.remove('hidden');
  }
});

// Change Owner PIN Form
const changePinForm = document.getElementById('change-pin-form');
const newPinInput = document.getElementById('new-pin-input');
const confirmPinInput = document.getElementById('confirm-pin-input');
const pinChangeStatus = document.getElementById('pin-change-status');

changePinForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const p1 = newPinInput?.value.trim() || '';
  const p2 = confirmPinInput?.value.trim() || '';
  if (!pinChangeStatus) return;

  if (p1.length < 4 || p1 !== p2) {
    pinChangeStatus.textContent = 'PINs do not match or are shorter than 4 characters.';
    pinChangeStatus.className = 'text-xs font-bold p-3 rounded-xl bg-rose-500/20 text-rose-400 block';
    return;
  }

  studioPin = p1;
  localStorage.setItem(PIN_STORAGE_KEY, studioPin);
  try {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin: studioPin })
    });
  } catch (_) {}

  playSound('success');
  pinChangeStatus.textContent = 'Owner PIN updated successfully.';
  pinChangeStatus.className = 'text-xs font-bold p-3 rounded-xl bg-blue-600/25 text-sky-300 border border-sky-400/40 block';
  changePinForm.reset();
});

projImageFileInput?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    if (typeof reader.result === 'string') {
      projImageUrlInput.value = reader.result;
      if (projImagePreview) projImagePreview.src = reader.result;
    }
  };
  reader.readAsDataURL(file);
});

projImageUrlInput?.addEventListener('input', () => {
  if (projImagePreview && projImageUrlInput.value.trim()) {
    projImagePreview.src = projImageUrlInput.value.trim();
  }
});

generateCoverBtn?.addEventListener('click', () => {
  playSound('success');
  const title = (projTitleInput?.value.trim() || 'New Web Project').slice(0, 32);
  const badge = (projCategoryLabelInput?.value.trim() || 'WEB APPLICATION').slice(0, 24);
  const accent = projAccentInput?.value || '#2563eb';

  const c = document.createElement('canvas');
  c.width = 800;
  c.height = 500;
  const ctx = c.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 800, 500);
  grad.addColorStop(0, '#040a18');
  grad.addColorStop(1, '#0c214a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 500);

  ctx.strokeStyle = accent;
  ctx.lineWidth = 3;
  ctx.strokeRect(70, 60, 660, 380);

  ctx.fillStyle = accent;
  ctx.font = 'bold 16px monospace';
  ctx.fillText(badge.toUpperCase(), 110, 140);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px sans-serif';
  ctx.fillText(title, 110, 215);

  ctx.fillStyle = '#93c5fd';
  ctx.font = '19px monospace';
  ctx.fillText('Faraj Alrmah // Frontend Portfolio', 110, 270);

  const dataUrl = c.toDataURL('image/png');
  projImageUrlInput.value = dataUrl;
  if (projImagePreview) projImagePreview.src = dataUrl;
});

studioProjectForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const editId = projIdInput.value.trim();
  const item = {
    id: editId || `proj-${Date.now()}`,
    title: projTitleInput.value.trim(),
    category: projCategoryInput.value,
    categoryLabel: projCategoryLabelInput.value.trim(),
    accent: projAccentInput.value,
    description: projDescInput.value.trim(),
    tags: projTagsInput.value.split(',').map(s => s.trim()).filter(Boolean),
    image: projImageUrlInput.value.trim() || './images/portfolio-cover.svg',
    link: projLinkInput.value.trim(),
    github: projGithubInput.value.trim(),
    claps: 42
  };

  if (editId) {
    const idx = projects.findIndex(p => p.id === editId);
    if (idx !== -1) projects[idx] = item;
  } else {
    projects.unshift(item);
  }

  await persistProjects();
  playSound('success');
  closeStudioModal();
  openSection('projects');
});

window.editProject = (id) => {
  const found = projects.find(p => p.id === id);
  if (found) openStudioModal(found);
};

window.deleteProject = async (id) => {
  if (!confirm('Are you sure you want to delete this project?')) return;
  projects = projects.filter(p => p.id !== id);
  await persistProjects();
  playSound('click');
};

window.moveProject = async (idx, dir) => {
  const target = idx + dir;
  if (target < 0 || target >= projects.length) return;
  const temp = projects[idx];
  projects[idx] = projects[target];
  projects[target] = temp;
  await persistProjects();
  playSound('click');
};

document.getElementById('open-studio-btn')?.addEventListener('click', () => openStudioModal());
document.getElementById('projects-add-btn')?.addEventListener('click', () => openStudioModal());
document.getElementById('banner-new-project-btn')?.addEventListener('click', () => showProjectEditor(null));
document.getElementById('close-pin-modal')?.addEventListener('click', closeStudioModal);
document.getElementById('close-editor-modal')?.addEventListener('click', closeStudioModal);
document.getElementById('cancel-editor-btn')?.addEventListener('click', closeStudioModal);

document.getElementById('lock-studio-btn')?.addEventListener('click', () => {
  studioUnlocked = false;
  sessionStorage.removeItem(STUDIO_UNLOCK_KEY);
  updateStudioUI();
  playSound('click');
});

document.getElementById('export-projects-btn')?.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(projects, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'faraj-projects.json';
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('import-projects-input')?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (Array.isArray(imported)) {
        projects = imported;
        await persistProjects();
        playSound('success');
      }
    } catch (_) {
      alert('Invalid JSON file.');
    }
  };
  reader.readAsText(file);
});

// ============================================================================
// 10. FREE MULTI-CHANNEL CONTACT SYSTEM (INBOX + GMAIL + FORMSPREE + WHATSAPP)
// ============================================================================
document.querySelectorAll('.topic-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const topic = chip.getAttribute('data-topic') || '';
    const subj = document.getElementById('subject');
    if (subj) subj.value = topic;
  });
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const whatsappSendBtn = document.getElementById('whatsapp-send-btn');

whatsappSendBtn?.addEventListener('click', () => {
  playSound('click');
  const first = document.getElementById('first_name')?.value.trim() || '';
  const last = document.getElementById('last_name')?.value.trim() || '';
  const email = document.getElementById('user_email')?.value.trim() || '';
  const subj = document.getElementById('subject')?.value.trim() || 'Project Inquiry';
  const msg = document.getElementById('message_text')?.value.trim() || 'Hi Faraj, I would like to discuss a project.';

  const text = `Hello Faraj 👋\n*Name:* ${first} ${last}\n*Email:* ${email}\n*Subject:* ${subj}\n\n*Message:*\n${msg}`;
  window.open(`https://wa.me/218922613675?text=${encodeURIComponent(text)}`, '_blank');
});

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!submitBtn || !btnText || !formStatus) return;

  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';
  formStatus.classList.add('hidden');

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  await saveInboxMessage({
    id: `msg-${Date.now()}`,
    ...data,
    date: new Date().toLocaleString()
  });

  let deliveredRemotely = false;
  try {
    const res1 = await fetch('https://formsubmit.co/ajax/farajelrmahmoo@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
        email: data.user_email,
        phone: data.user_phone,
        _subject: `Portfolio Inquiry: ${data.subject || 'New Message'}`,
        message: data.message_text
      })
    });
    if (res1.ok) deliveredRemotely = true;
  } catch (_) {}

  try {
    const res2 = await fetch('https://formspree.io/f/mrelndrz', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    if (res2.ok) deliveredRemotely = true;
  } catch (_) {}

  playSound('success');
  formStatus.textContent = deliveredRemotely
    ? 'Message sent! I will reply soon.'
    : 'Message saved to my inbox. You can also tap "Send on WhatsApp" for instant chat.';
  formStatus.className = 'text-sm font-medium p-3.5 rounded-xl bg-blue-600/20 text-sky-300 border border-sky-400/40 block';
  contactForm.reset();

  submitBtn.disabled = false;
  btnText.textContent = 'Send message';
});

// ============================================================================
// INITIALIZE APPLICATION
// ============================================================================
const themeToggleBtn = document.getElementById('theme-toggle-btn');

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.documentElement.classList.toggle('light', isLight);
  document.documentElement.classList.toggle('dark', !isLight);
  if (themeToggleBtn) {
    themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
    themeToggleBtn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }
  if (ambientLight) {
    ambientLight.color.setHex(isLight ? 0xffffff : 0xdbeafe);
    ambientLight.intensity = isLight ? 1.55 : 0.95;
  }
  if (keyLight) keyLight.intensity = isLight ? 2.15 : 1.8;
  if (blueBackGlow) blueBackGlow.intensity = isLight ? 0.55 : 3.8;
  if (skyFillLight) skyFillLight.intensity = isLight ? 0.85 : 2.6;

  // Transform 3D desk materials between Daylight Studio (oak + aluminum) and Midnight Studio (navy + neon)
  if (floorMat) floorMat.color.setHex(isLight ? 0xdbeafe : 0x061229);
  if (floorRingMat) floorRingMat.color.setHex(isLight ? 0x0284c7 : 0x38bdf8);
  if (deskTopMat) {
    deskTopMat.color.setHex(isLight ? 0xe5d3b3 : 0x0f2142);
    deskTopMat.roughness = isLight ? 0.55 : 0.35;
    deskTopMat.metalness = isLight ? 0.08 : 0.28;
  }
  if (metalMat) {
    metalMat.color.setHex(isLight ? 0xcbd5e1 : 0x1e3a8a);
    metalMat.metalness = isLight ? 0.55 : 0.75;
  }
  if (deskMatMat) deskMatMat.color.setHex(isLight ? 0x94a3b8 : 0x07142b);
  if (bezelMat) bezelMat.color.setHex(isLight ? 0x1e293b : 0x050c1a);
  if (kbCaseMat) kbCaseMat.color.setHex(isLight ? 0xe2e8f0 : 0x1e3a8a);
  if (rgbStripMat) rgbStripMat.color.setHex(isLight ? 0x0284c7 : 0x38bdf8);

  if (rendererOpaque && scene) {
    scene.background = new THREE.Color(isLight ? 0xe2e8f0 : 0x071430);
  }
  try { localStorage.setItem('faraj_theme', isLight ? 'light' : 'dark'); } catch (_) {}
}

themeToggleBtn?.addEventListener('click', () => {
  playSound('click');
  const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  applyTheme(next);
});

initDesk3D();
applyTheme((() => { try { return localStorage.getItem('faraj_theme') || 'dark'; } catch (_) { return 'dark'; } })());
renderTechSkillsGrid();
selectTechModule(0, false);
updateStudioUI();
loadInitialProjects();
loadInboxMessages();
updateEstimator();
