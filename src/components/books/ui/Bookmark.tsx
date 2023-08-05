import React from 'react';
import type { FC } from 'react';
import { HStack, Image, Link, Text } from '@chakra-ui/react';
import { BookMarkTreeNode } from '@/hooks/useBookmarks';
import { useFavicon } from '@/hooks/useFavicon';
import { Tooltip } from '@chakra-ui/react';

type BookmarkProps = BookMarkTreeNode;

export const Bookmark: FC<BookmarkProps> = ({ title, url }) => {
  const { faviconUrl } = useFavicon(url);

  return (
    <Link href={url}>
      <Tooltip label={title} openDelay={500}>
        <HStack>
          <Image src={faviconUrl} boxSize='16px' />
          <Text noOfLines={1}>{title}</Text>
        </HStack>
      </Tooltip>
    </Link>
  );
};
