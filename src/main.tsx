import { createRoot } from 'react-dom/client'
import { Suspense } from 'react';
import App from './App.tsx'
import './index.css'
// Import i18n instance - this needs to be imported before the App
import i18n from './i18n';

// Make sure the i18n instance is ready before rendering
const renderApp = () => {
  createRoot(document.getElementById("root")!).render(
    <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">Loading...</div>}>
      <App />
    </Suspense>
  );
};

// Either render immediately if already initialized or wait
if (i18n.isInitialized) {
  renderApp();
} else {
  i18n.on('initialized', renderApp);
}
