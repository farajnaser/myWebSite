import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function farajStudioCmsPlugin() {
  return {
    name: 'faraj-studio-cms',
    configureServer(server) {
      const publicDir = path.resolve(process.cwd(), 'public');
      const projectsFile = path.join(publicDir, 'projects.json');
      const messagesFile = path.join(publicDir, 'messages.json');
      const settingsFile = path.join(publicDir, 'studio-settings.json');
      const imagesDir = path.join(publicDir, 'images');

      // 1. PROJECTS API
      server.middlewares.use('/api/projects', (req, res, next) => {
        if (req.method === 'GET') {
          try {
            if (fs.existsSync(projectsFile)) {
              const data = fs.readFileSync(projectsFile, 'utf-8');
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(data);
              return;
            }
          } catch (err) {
            console.error('Error reading projects.json:', err);
          }
          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'Not found' }));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const payload = JSON.parse(body);
              const projects = Array.isArray(payload.projects) ? payload.projects : [];

              if (!fs.existsSync(imagesDir)) {
                fs.mkdirSync(imagesDir, { recursive: true });
              }

              const processedProjects = projects.map((proj, idx) => {
                if (proj.image && typeof proj.image === 'string' && proj.image.startsWith('data:image/')) {
                  const match = proj.image.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
                  if (match) {
                    let ext = match[1].toLowerCase();
                    if (ext === 'jpeg') ext = 'jpg';
                    if (ext === 'svg+xml') ext = 'svg';
                    const base64Data = match[2];
                    const safeSlug = (proj.title || `project-${idx}`)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-|-$/g, '') || 'project';
                    const fileName = `${safeSlug}-${Date.now()}.${ext}`;
                    const filePath = path.join(imagesDir, fileName);
                    const buf = Buffer.from(base64Data, 'base64');
                    fs.writeFileSync(filePath, buf);
                    try {
                      const rootImagesDir = path.resolve(process.cwd(), 'images');
                      if (!fs.existsSync(rootImagesDir)) fs.mkdirSync(rootImagesDir, { recursive: true });
                      fs.writeFileSync(path.join(rootImagesDir, fileName), buf);
                    } catch (_) {}
                    return {
                      ...proj,
                      image: `./images/${fileName}`
                    };
                  }
                }
                return proj;
              });

              const jsonStr = JSON.stringify(processedProjects, null, 2);
              fs.writeFileSync(projectsFile, jsonStr, 'utf-8');
              try {
                fs.writeFileSync(path.resolve(process.cwd(), 'projects.json'), jsonStr, 'utf-8');
              } catch (_) {}
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ ok: true, projects: processedProjects }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ ok: false, error: err.message }));
            }
          });
          return;
        }

        next();
      });

      // 2. MESSAGES INBOX API
      server.middlewares.use('/api/messages', (req, res, next) => {
        if (req.method === 'GET') {
          try {
            if (fs.existsSync(messagesFile)) {
              const data = fs.readFileSync(messagesFile, 'utf-8');
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(data);
              return;
            }
          } catch (_) {}
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify([]));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const payload = JSON.parse(body);
              let messages = [];
              if (fs.existsSync(messagesFile)) {
                try {
                  messages = JSON.parse(fs.readFileSync(messagesFile, 'utf-8'));
                } catch (_) { messages = []; }
              }

              if (Array.isArray(payload.messages)) {
                messages = payload.messages;
              } else if (payload.newMessage) {
                messages.unshift(payload.newMessage);
              }

              fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ ok: true, messages }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ ok: false, error: err.message }));
            }
          });
          return;
        }

        next();
      });

      // 3. STUDIO PIN & SETTINGS API
      server.middlewares.use('/api/settings', (req, res, next) => {
        if (req.method === 'GET') {
          try {
            if (fs.existsSync(settingsFile)) {
              const data = fs.readFileSync(settingsFile, 'utf-8');
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(data);
              return;
            }
          } catch (_) {}
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ pin: '2026' }));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const payload = JSON.parse(body);
              const newPin = String(payload.pin || '2026').trim();
              fs.writeFileSync(settingsFile, JSON.stringify({ pin: newPin }, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ ok: true, pin: newPin }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ ok: false, error: err.message }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [farajStudioCmsPlugin()]
});
