import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { ChakraProvider } from '@chakra-ui/react';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
