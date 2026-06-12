import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import {MovieProvider} from './context/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <MovieProvider>
          <App />
        </MovieProvider>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>,
)
