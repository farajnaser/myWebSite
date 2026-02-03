(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=[{title:"E-Commerce Dashboard",description:"A modern dashboard for online retailers with real-time analytics and inventory management.",tags:["Vue.js","Tailwind","Chart.js"],image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",link:"#"},{title:"Travel App",description:"Booking platform for unique travel experiences with interactive maps and user reviews.",tags:["React","Node.js","MongoDB"],image:"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",link:"#"},{title:"AI Image Generator",description:"Web application that uses AI API to generate images from text descriptions.",tags:["JavaScript","OpenAI API","CSS"],image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",link:"#"}],l=document.getElementById("projects-grid"),m=t=>`
    <div class="group relative glass-panel rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 reveal">
      <div class="h-48 overflow-hidden relative">
        <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
      </div>
      <div class="p-6">
        <div class="flex flex-wrap gap-2 mb-4">
          ${t.tags.map(o=>`<span class="text-xs font-semibold px-2 py-1 rounded bg-slate-800 text-purple-300 border border-purple-500/20">${o}</span>`).join("")}
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">${t.title}</h3>
        <p class="text-slate-400 text-sm mb-6 line-clamp-2">${t.description}</p>
        <a href="${t.link}" class="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
          View Project 
          <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  `;l&&(l.innerHTML=p.map(m).join(""));const n=document.getElementById("mobile-menu-btn"),c=document.getElementById("mobile-menu");n&&c&&n.addEventListener("click",()=>{c.classList.toggle("hidden");const t=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!t)});const u=document.querySelectorAll(".reveal"),d=()=>{const t=window.innerHeight,o=150;u.forEach(i=>{i.getBoundingClientRect().top<t-o&&i.classList.add("active")})};window.addEventListener("scroll",d);d();document.addEventListener("mousemove",t=>{t.clientX/window.innerWidth,t.clientY/window.innerHeight});
