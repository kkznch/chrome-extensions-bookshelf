import React from 'react';
import { Bookshelf } from '@/components/books/ui';
import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useBookmarks } from '@/hooks/useBookmarks';

export const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { bookmarks } = useBookmarks();
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
      <Grid
        py='16px'
        px='24px'
        gap='16px'
        templateColumns='repeat(auto-fill, minmax(256px, min-content))'>
        {bookmarks.bookmarkBarBookmarks.length > 0 && (
          <GridItem>
            <Bookshelf
              title='Bookmarks Bar'
              bookmarks={bookmarks.bookmarkBarBookmarks}></Bookshelf>
          </GridItem>
        )}
        {bookmarks.bookmarkBarFolders.map((item) => {
          return (
            item.children != null &&
            item.children.length > 0 && (
              <GridItem>
                <Bookshelf
                  title={item.title}
                  bookmarks={item.children}></Bookshelf>
              </GridItem>
            )
          );
        })}
        {bookmarks.otherBookmarks.length > 0 && (
          <GridItem>
            <Bookshelf
              title='Other Bookmarks'
              bookmarks={bookmarks.otherBookmarks}></Bookshelf>
          </GridItem>
        )}
      </Grid>
    </>
  );
};
