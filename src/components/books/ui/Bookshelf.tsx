import React, { useCallback, useMemo, useState } from 'react';
import type { FC } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  List,
  Heading,
  Button,
  ListItem,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { Bookmark } from './Bookmark';
import { Folder } from './Folder';
import { BookMarkTreeNode } from '@/hooks/useBookmarks';
import { ArrowLeftIcon } from '@chakra-ui/icons';

type BookshelfProps = BookMarkTreeNode;

export const Bookshelf: FC<BookshelfProps> = (item) => {
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

  return (
    <Card size='sm' maxWidth='256px' minWidth='256px'>
      <CardHeader>
        <HStack h='24px'>
          {folders.length > 1 ? (
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
                  cursor='pointer'>
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
