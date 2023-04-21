import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      exclude: ['node_modules', 'test/', 'coverage/'],
      extension: ['tsx'],
      cypress: true,
    }),
  ],
  server: {
    open: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  base: './',
});
