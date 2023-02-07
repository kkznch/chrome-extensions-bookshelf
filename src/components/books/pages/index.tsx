import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Bookshelf, type BookMarkTreeNode } from '../ui';
import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type Bookmarks = {
  bookmarkBarBookmarks: BookMarkTreeNode[];
  bookmarkBarFolders: BookMarkTreeNode[];
  otherBookmarks: BookMarkTreeNode[];
};


export const Index = () => {
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
        borderColor='gray.200'
      >
        <IconButton
          aria-label='a'
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          onClick={() => toggleColorMode()}
        />
      </Flex>
      <Grid
        py='16px'
        px='24px'
        gap='16px'
        templateColumns='repeat(auto-fill, minmax(256px, min-content))'
      >
        {bookmarks.bookmarkBarBookmarks.length > 0 && (
          <GridItem>
            <Bookshelf
              title='Bookmarks Bar'
              bookmarks={bookmarks.bookmarkBarBookmarks}
            ></Bookshelf>
          </GridItem>
        )}
        {bookmarks.bookmarkBarFolders.map((item) => {
          return (
            item.children != null &&
            item.children.length > 0 && (
              <GridItem>
                <Bookshelf
                  title={item.title}
                  bookmarks={item.children}
                ></Bookshelf>
              </GridItem>
            )
          );
        })}
        {bookmarks.otherBookmarks.length > 0 && (
          <GridItem>
            <Bookshelf
              title='Other Bookmarks'
              bookmarks={bookmarks.otherBookmarks}
            ></Bookshelf>
          </GridItem>
        )}
      </Grid>
    </>
  );
};
