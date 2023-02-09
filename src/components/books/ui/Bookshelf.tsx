import React from 'react';
import type { FC } from 'react';
import { Card, CardHeader, CardBody, List, Heading } from '@chakra-ui/react';
import { Bookmark } from './Bookmark';
import { Folder } from './Folder';
import { BookMarkTreeNode } from '@/hooks/useBookmarks';

type BookshelfProps = {
  title: string;
  bookmarks: BookMarkTreeNode[];
};

export const Bookshelf: FC<BookshelfProps> = ({ title, bookmarks }) => {
  return (
    <Card size='sm' maxWidth='256px' minWidth='256px'>
      <CardHeader>
        <Heading as='h5' size='sm'>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <List spacing='1'>
          {bookmarks
            .slice()
            .sort((a, b) => {
              // index の昇順にする
              if (a.index != null && b.index != null) {
                return a?.index - b?.index;
              }
              return 0;
            })
            .map((item) =>
              item.children != null ? (
                <Folder title={item.title} />
              ) : (
                <Bookmark title={item.title} url={item.url} />
              )
            )}
        </List>
      </CardBody>
    </Card>
  );
};
