import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Bookshelf, type BookMarkTreeNode } from './Bookshelf';
import {
  Flex,
  IconButton,
  useColorMode,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type Bookmarks = {
  bookmarkBarBookmarks: BookMarkTreeNode[];
  bookmarkBarFolders: BookMarkTreeNode[];
  otherBookmarks: BookMarkTreeNode[];
};

const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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

  return (
    <>
      <Flex
        p='8px'
        justifyContent='end'
        borderBottom='1px'
        borderColor='gray.200'>
        <IconButton
          aria-label='a'
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          onClick={() => toggleColorMode()}
        />
      </Flex>
      <Wrap py='16px' px='24px' spacing='24px'>
        {bookmarks.bookmarkBarBookmarks.length > 0 && (
          <WrapItem>
            <Bookshelf
              title='Bookmarks Bar'
              bookmarks={bookmarks.bookmarkBarBookmarks}></Bookshelf>
          </WrapItem>
        )}
        {bookmarks.bookmarkBarFolders.map((item) => {
          return (
            item.children != null &&
            item.children.length > 0 && (
              <WrapItem>
                <Bookshelf
                  title={item.title}
                  bookmarks={item.children}></Bookshelf>
              </WrapItem>
            )
          );
        })}
        {bookmarks.otherBookmarks.length > 0 && (
          <WrapItem>
            <Bookshelf
              title='Other Bookmarks'
              bookmarks={bookmarks.otherBookmarks}></Bookshelf>
          </WrapItem>
        )}
      </Wrap>
    </>
  );
};

export default App;
