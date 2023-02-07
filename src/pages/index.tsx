import React from 'react';
import { createRoot } from 'react-dom/client';
import { Index } from '../components/books/pages';
import { ChakraProvider } from '@chakra-ui/react';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Index />
    </ChakraProvider>
  </React.StrictMode>
);
