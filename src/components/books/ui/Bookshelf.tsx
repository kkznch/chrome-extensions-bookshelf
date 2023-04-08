import React from 'react';
import type { FC } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  List,
  Heading,
  ListItem,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { Bookmark } from './Bookmark';
import { Folder } from './Folder';
import { BookMarkTreeNode } from '@/hooks/useBookmarks';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useFolders } from '@/hooks/useFolders';

type BookshelfProps = BookMarkTreeNode;

export const Bookshelf: FC<BookshelfProps> = (item) => {
  const {
    openSelectedFolder,
    backToParentFolder,
    currentFolder,
    isRootFolder,
  } = useFolders(item);

  return (
    <Card
      display='inline-block'
      size='sm'
      maxWidth='256px'
      minWidth='256px'
      mb='16px'
    >
      <CardHeader>
        <HStack h='24px'>
          {!isRootFolder ? (
            <IconButton
              icon={<ArrowLeftIcon />}
              onClick={backToParentFolder}
              aria-label='Back to parent folder'
              size='xs'
            />
          ) : null}
          textDecoration='underline'
          <Heading as='h5' size='sm'>
            {currentFolder.title}
          </Heading>
        </HStack>
      </CardHeader>
      <CardBody>
        <List spacing='2'>
          {currentFolder.children
            ?.slice()
            .sort((a, b) => {
              // index の昇順にする
              if (a.index != null && b.index != null) {
                return a?.index - b?.index;
              }
              return 0;
            })
            .map((item) =>
              item.children != null ? (
                <ListItem
                  key={item.id}
                  onClick={() => openSelectedFolder(item)}
                  _hover={{ textDecoration: 'underline' }}
                  cursor='pointer'
                >
                  <Folder {...item} />
                </ListItem>
              ) : (
                <ListItem key={item.id}>
                  <Bookmark {...item} />
                </ListItem>
              )
            )}
        </List>
      </CardBody>
    </Card>
  );
};
