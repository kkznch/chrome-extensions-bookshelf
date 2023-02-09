import { useEffect, useState } from 'react';
import { BookMarkTreeNode } from '@/components/books/ui';

type Bookmarks = {
  bookmarkBarBookmarks: BookMarkTreeNode[];
  bookmarkBarFolders: BookMarkTreeNode[];
  otherBookmarks: BookMarkTreeNode[];
};

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmarks>({
    bookmarkBarBookmarks: [],
    bookmarkBarFolders: [],
    otherBookmarks: [],
  });

  useEffect(() => {
    chrome.bookmarks.getTree().then((tree) => {
      if (tree[0].children == null) return;

      const bookmarkBar = tree[0].children[0] ?? [];
      const otherBookmarks = tree[0].children[1] ?? [];

      setBookmarks({
        bookmarkBarBookmarks:
          bookmarkBar.children?.filter((item) => item.children == null) ?? [],
        bookmarkBarFolders:
          bookmarkBar.children?.filter((item) => item.children != null) ?? [],
        otherBookmarks: otherBookmarks.children ?? [],
      });
    });
  }, []);

  return {
    bookmarks,
  };
};
