chrome.runtime.onInstalled.addListener(() => {
  const openBookShelf = chrome.contextMenus.create({
    id: 'open-book-shelf',
    title: 'Open book shelf',
    type: 'normal',
    contexts: ['all'],
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
      case openBookShelf:
        const homeUrl = chrome.runtime.getURL('index.html');
        chrome.tabs.create({
          url: homeUrl,
        });
        break;
    }
  });
});
