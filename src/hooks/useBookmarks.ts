import { useEffect, useState } from 'react';

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
    chrome.bookmarks.getTree().then((tree) => {
      if (tree[0].children == null) return;

      const bookmarkBar = tree[0].children[0] ?? [];
      const otherBookmarks = tree[0].children[1] ?? [];

      setBookmarks({
        bookmarkBarBookmarks: {
          ...bookmarkBar,
          children:
            bookmarkBar.children?.filter((item) => item.children == null) ?? [],
        },
        bookmarkBarFolders:
          bookmarkBar.children?.filter((item) => item.children != null) ?? [],
        otherBookmarks,
      });
    });
  }, []);

  return {
    bookmarks,
  };
};
