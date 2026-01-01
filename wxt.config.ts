import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'MyBookshelf',
    version: '1.0.0',
    description: 'My book shelf',
    permissions: ['bookmarks', 'contextMenus', 'tabs', 'storage'],
    icons: {
      '16': '/icon16.png',
      '48': '/icon48.png',
      '128': '/icon128.png',
    },
  },
  vite: () => ({
    resolve: {
      alias: {
        '@': `${__dirname}/src`,
      },
    },
  }),
});
