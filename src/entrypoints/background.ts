export default defineBackground(() => {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'open-book-shelf',
      title: 'Open book shelf',
      type: 'normal',
      contexts: ['all'],
    });
  });

  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === 'open-book-shelf') {
      const homeUrl = chrome.runtime.getURL('/bookshelf.html');
      chrome.tabs.create({
        url: homeUrl,
      });
    }
  });
});
