import React from 'react';
import type { FC } from 'react';
import { HStack, ListItem, Text } from '@chakra-ui/react';
import { FaFolder } from 'react-icons/fa';

type FolderProps = {
  title: string;
};

export const Folder: FC<FolderProps> = ({ title }) => {
  return (
    <ListItem>
      <HStack>
        <FaFolder size='16px' />
        <Text noOfLines={1}>{title}</Text>
      </HStack>
    </ListItem>
  );
};
