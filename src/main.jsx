import { createRoot } from 'react-dom/client';
import './i18n';
import App from './App.jsx';
import './App.css';
import AppProvider from './components/AppProvider/AppProvider.jsx';


createRoot(document.getElementById('root')).render(<AppProvider><App /></AppProvider>);
