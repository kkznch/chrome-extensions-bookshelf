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
        {bookmarks.bookmarkBarBookmarks != null && (
          <GridItem>
            <Bookshelf {...bookmarks.bookmarkBarBookmarks} />
          </GridItem>
        )}
        {bookmarks.bookmarkBarFolders.map((item) => {
          return (
            item.children != null &&
            item.children.length > 0 && (
              <GridItem key={item.id}>
                <Bookshelf {...item} />
              </GridItem>
            )
          );
        })}
        {bookmarks.otherBookmarks != null && (
          <GridItem>
            <Bookshelf {...bookmarks.otherBookmarks} />
          </GridItem>
        )}
      </Grid>
    </>
  );
};
