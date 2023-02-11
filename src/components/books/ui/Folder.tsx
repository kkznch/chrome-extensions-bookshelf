import React from 'react';
import type { FC } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { FaFolder } from 'react-icons/fa';
import { BookMarkTreeNode } from '@/hooks/useBookmarks';

type FolderProps = BookMarkTreeNode;

export const Folder: FC<FolderProps> = ({ title }) => {
  return (
    <HStack>
      <FaFolder size='16px' />
      <Text noOfLines={1}>{title}</Text>
    </HStack>
  );
};
