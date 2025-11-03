const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  let filePath = path.join(publicDir, req.url === '/' ? '/index.html' : req.url);
  const ext = path.extname(filePath).toLowerCase();

  const contentType = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
  }[ext] || 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(path.join(publicDir, 'index.html')).pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  });
});

server.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
});
