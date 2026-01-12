import { browser } from 'wxt/browser';

export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
      id: 'open-book-shelf',
      title: 'Open book shelf',
      type: 'normal',
      contexts: ['all'],
    });
  });

  browser.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === 'open-book-shelf') {
      const homeUrl = browser.runtime.getURL('/bookshelf.html');
      browser.tabs.create({
        url: homeUrl,
      });
    }
  });
});
