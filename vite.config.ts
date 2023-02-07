import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';
import { resolve } from 'path';

const manifest = defineManifest({
  name: 'MyBookshelf',
  version: '1.0.0',
  manifest_version: 3,
  description: 'Sample Chrome Extension',
  permissions: ['bookmarks', 'favicon'],
  chrome_url_overrides: {
    newtab: './index.html',
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
