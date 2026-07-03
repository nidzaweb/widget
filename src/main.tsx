import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ItemSelectorProvider } from './context/item-selector/ItemSelectorContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ItemSelectorProvider>
      <App />
    </ItemSelectorProvider>
  </StrictMode>
);
