import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Relative paths so it works on any subdomain/subpath (e.g. GitHub Pages)
  base: './',
  // Build output to docs/ for GitHub Pages
  build: {
    outDir: path.resolve(__dirname, '..', 'docs'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@gameplay': path.resolve(__dirname, 'src/gameplay'),
      '@world': path.resolve(__dirname, 'src/world'),
      '@vfx': path.resolve(__dirname, 'src/vfx'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
