import type { BookMarkTreeNode } from '@/hooks/useBookmarks';

/**
 * ブラウザのブックマークツリーからブックマークバーを取得
 * Chrome/Firefox両方で動作
 */
export const getBookmarkBar = (tree: BookMarkTreeNode[]): BookMarkTreeNode | null => {
  if (!tree[0]?.children) return null;

  // ChromeとFirefoxで異なるIDや名前に対応
  return tree[0].children.find((node) =>
    node.id === '1' || // Chrome
    node.id === 'toolbar_____' || // Firefox
    node.title === 'Bookmarks Bar' || // Chrome (英語)
    node.title === 'Bookmarks Toolbar' || // Firefox (英語)
    node.title === 'ブックマークバー' || // Chrome (日本語)
    node.title === 'ブックマークツールバー' // Firefox (日本語)
  ) ?? null;
};

/**
 * ブラウザのブックマークツリーから「その他のブックマーク」を取得
 * Chrome/Firefox両方で動作
 */
export const getOtherBookmarks = (tree: BookMarkTreeNode[]): BookMarkTreeNode | null => {
  if (!tree[0]?.children) return null;

  return tree[0].children.find((node) =>
    node.id === '2' || // Chrome
    node.id === 'unfiled_____' || // Firefox
    node.title === 'Other Bookmarks' || // Chrome
    node.title === '未整理のブックマーク' // Firefox (日本語)
  ) ?? null;
};

/**
 * ブックマークノードからフォルダのみをフィルタリング
 */
export const filterFolders = (nodes: BookMarkTreeNode[] = []): BookMarkTreeNode[] => {
  return nodes.filter((item) => item.children != null);
};

/**
 * ブックマークノードからブックマーク（フォルダ以外）のみをフィルタリング
 */
export const filterBookmarks = (nodes: BookMarkTreeNode[] = []): BookMarkTreeNode[] => {
  return nodes.filter((item) => item.children == null);
};
