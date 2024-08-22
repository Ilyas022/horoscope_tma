import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './mockEnv.ts';
import { SDKProvider } from '@telegram-apps/sdk-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SDKProvider>
      <App />
    </SDKProvider>
  </StrictMode>,
)
