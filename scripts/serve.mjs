import http from 'node:http';
import { readFile } from 'node:fs/promises';
const files = { '/': 'index.html', '/index.html': 'index.html', '/app.js': 'app.js', '/styles.css': 'styles.css' };
const types = { html: 'text/html; charset=utf-8', js: 'text/javascript; charset=utf-8', css: 'text/css; charset=utf-8' };
http.createServer(async (req, res) => {
  const file = files[new URL(req.url, 'http://localhost').pathname];
  if (!file) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const body = await readFile(`web/${file}`);
    res.writeHead(200, { 'Content-Type': types[file.split('.').pop()] }); res.end(body);
  } catch { res.writeHead(500); res.end('Unable to load page'); }
}).listen(3000, '127.0.0.1', () => console.log('Jourplan: http://localhost:3000'));
