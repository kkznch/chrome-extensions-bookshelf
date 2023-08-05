import React from 'react';
import { Bookshelf } from '@/components/books/ui';
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useOpenNewTab } from '@/hooks/useOpenNewTab';

export const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { bookmarks } = useBookmarks();
  const { openInNewTab, toggleOpenNewTab } = useOpenNewTab();

  return (
    <>
      <Flex
        p='8px'
        gap='4'
        justifyContent='end'
        alignItems='center'
        borderBottom='1px'
        borderColor='gray.200'>
        <FormControl display='flex' alignItems='center' width='fit-content'>
          <FormLabel htmlFor='new-tab-switch' mb='0'>
            Open new tab
          </FormLabel>
          <Switch
            id='new-tab-switch'
            size='md'
            isChecked={openInNewTab}
            onChange={toggleOpenNewTab}
          />
        </FormControl>
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
        }}>
        {bookmarks.bookmarkBarBookmarks != null &&
          bookmarks.bookmarkBarBookmarks.children != null &&
          bookmarks.bookmarkBarBookmarks.children.length > 0 && (
            <Bookshelf {...bookmarks.bookmarkBarBookmarks} />
          )}
        {bookmarks.bookmarkBarFolders.map((item) => {
          return (
            item.children != null &&
            item.children.length > 0 && <Bookshelf key={item.id} {...item} />
          );
        })}
        {bookmarks.otherBookmarks != null &&
          bookmarks.otherBookmarks.children != null &&
          bookmarks.otherBookmarks.children.length > 0 && (
            <Bookshelf {...bookmarks.otherBookmarks} />
          )}
      </Box>
    </>
  );
};
