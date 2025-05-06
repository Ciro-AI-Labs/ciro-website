import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import i18n instance - must be imported before the App
import './i18n';

// Directly render the app - our i18n setup is now simpler and doesn't need to wait
createRoot(document.getElementById("root")!).render(<App />);
