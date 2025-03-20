import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import fs from 'fs';
import path from 'path';
import { IncomingMessage, ServerResponse } from 'http';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }]
        ]
      })
    },
    react(),
    {
      name: 'serve-static-files',
      configureServer(server) {
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
          // 检查是否请求ads.txt或其他静态文件
          const url = req.url || '';
          if (url.endsWith('.txt')) {
            // 移除前导斜杠
            const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
            const filePath = path.join(process.cwd(), 'public', cleanUrl);
            
            if (fs.existsSync(filePath)) {
              const content = fs.readFileSync(filePath, 'utf-8');
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
              res.end(content);
              return;
            }
          }
          next();
        });
      }
    }
  ],
  optimizeDeps: {
    include: ['@mdx-js/react', 'react', 'react-dom'],
    exclude: ['lucide-react'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    // 配置开发服务器以处理静态文件请求
    middlewareMode: false
  }
});
