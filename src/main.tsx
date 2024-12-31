import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './providers/QueryProvider';
import { router } from './routes';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </StrictMode>
);