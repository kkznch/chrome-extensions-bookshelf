import { useCallback, useMemo, useState } from 'react';
import { BookMarkTreeNode } from './useBookmarks';

export const useFolders = (item: BookMarkTreeNode) => {
  const [folders, setFolders] = useState<BookMarkTreeNode[]>([item]);

  const openSelectedFolder = useCallback(
    (item: BookMarkTreeNode) => {
      setFolders([...folders, item]);
    },
    [folders]
  );

  const backToParentFolder = useCallback(() => {
    if (folders.length <= 1) return;
    setFolders(folders.slice(0, folders.length - 1));
  }, [folders]);

  const currentFolder = useMemo(() => folders.slice(-1)[0], [folders]);
  const isRootFolder = useMemo(() => folders.length <= 1, [folders]);

  return {
    openSelectedFolder,
    backToParentFolder,
    currentFolder,
    isRootFolder,
  };
};
