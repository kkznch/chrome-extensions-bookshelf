import { useEffect, useState } from 'react';
import { browser } from 'wxt/browser';
import {
  getBookmarkBar,
  getOtherBookmarks,
  filterFolders,
  filterBookmarks,
} from '@/lib/bookmarks';

export type BookMarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

type Bookmarks = {
  bookmarkBarBookmarks: BookMarkTreeNode | null;
  bookmarkBarFolders: BookMarkTreeNode[];
  otherBookmarks: BookMarkTreeNode | null;
};

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmarks>({
    bookmarkBarBookmarks: null,
    bookmarkBarFolders: [],
    otherBookmarks: null,
  });

  useEffect(() => {
    browser.bookmarks.getTree().then((tree) => {
      const bookmarkBar = getBookmarkBar(tree);
      const otherBookmarks = getOtherBookmarks(tree);

      setBookmarks({
        bookmarkBarBookmarks: bookmarkBar
          ? {
              ...bookmarkBar,
              children: filterBookmarks(bookmarkBar.children),
            }
          : null,
        bookmarkBarFolders: filterFolders(bookmarkBar?.children),
        otherBookmarks,
      });
    });
  }, []);

  return {
    bookmarks,
  };
};
