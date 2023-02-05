import React, { useMemo } from 'react';
import type { FC } from 'react';
import { HStack, Image, Link, ListItem, Text } from '@chakra-ui/react';

type BookmarkProps = {
  title: string;
  url?: string;
};

const getFaviconUrl = (u: string): string => {
  const url = new URL(chrome.runtime.getURL('/_favicon/'));
  url.searchParams.set('pageUrl', u);
  url.searchParams.set('size', '32');
  return url.toString();
};

export const Bookmark: FC<BookmarkProps> = ({ title, url }) => {
  const faviconUrl = useMemo(() => {
    if (url == null) return '';
    return getFaviconUrl(url);
  }, [url]);

  console.log(faviconUrl);

  return (
    <ListItem>
      <Link href={url}>
        <HStack>
          <Image src={faviconUrl} boxSize='16px' />
          <Text noOfLines={1}>{title}</Text>
        </HStack>
      </Link>
    </ListItem>
  );
};
