import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  const { SERVER_PORT, SERVER_FULL_URL } = await vite.ssrLoadModule('./src/server.env.ts');
  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split(`<!--ssr-outlet-->`);
      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');
      const { pipe } = await render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(html[1]);
          res.end();
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(SERVER_PORT, () => console.log(SERVER_FULL_URL));
}

createServer();
