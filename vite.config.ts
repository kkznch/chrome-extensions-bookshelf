import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';
import { resolve } from 'path';

const manifest = defineManifest({
  name: 'MyBookshelf',
  version: '1.0.0',
  manifest_version: 3,
  description: 'Sample Chrome Extension',
  permissions: ['bookmarks'],
  icons: {
    '16': 'icon16.png',
    '48': 'icon48.png',
    '128': 'icon128.png',
  },
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
