const fs = require('fs');
const http = require('http');
const path = require('path');

const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.pdf', 'application/pdf'],
  ['.svg', 'image/svg+xml; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.xml', 'application/xml; charset=utf-8'],
]);

function createStaticServer(root) {
  const resolvedRoot = fs.realpathSync(root);

  return http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    let pathname = decodeURIComponent(url.pathname);

    if (pathname.endsWith('/')) {
      pathname += 'index.html';
    }

    const target = path.resolve(resolvedRoot, `.${pathname}`);
    const insideRoot = target === resolvedRoot || target.startsWith(resolvedRoot + path.sep);

    if (!insideRoot) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    fs.readFile(target, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end('Not found');
        return;
      }

      response.writeHead(200, {
        'Content-Type': mimeTypes.get(path.extname(target)) || 'application/octet-stream',
      });
      response.end(data);
    });
  });
}

function listen(server) {
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve(server.address().port);
    });
  });
}

module.exports = {
  createStaticServer,
  listen,
};
