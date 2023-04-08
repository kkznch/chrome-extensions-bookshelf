import React from 'react';
import { Bookshelf } from '@/components/books/ui';
import {
  Box,
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
        borderColor='gray.200'
      >
        <IconButton
          aria-label='a'
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          onClick={() => toggleColorMode()}
        />
      </Flex>
      <Box
        py='16px'
        px='24px'
        textAlign='center'
        sx={{
          columnCount: [1, 2, 3, 4, 5],
        }}
      >
        {bookmarks.bookmarkBarBookmarks != null && (
          <Bookshelf {...bookmarks.bookmarkBarBookmarks} />
        )}
        {bookmarks.bookmarkBarFolders.map((item) => {
          return (
            item.children != null &&
            item.children.length > 0 && <Bookshelf key={item.id} {...item} />
          );
        })}
        {bookmarks.otherBookmarks != null && (
          <Bookshelf {...bookmarks.otherBookmarks} />
        )}
      </Box>
    </>
  );
};
