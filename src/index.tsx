import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

// Extend MUI's Palette interface
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green - Represents the lush landscapes of Rwanda
    },
    secondary: {
      main: '#1A374D', // Deep Blue - Symbolizes the skies and lakes
    },
    accent: {
      main: '#F4A261', // Golden Yellow - Reflects the warmth and hospitality
    },
    background: {
      default: '#363247', // Warm Beige - Neutral tone for backgrounds
      paper: '#FFFFFF', // White - For cards and paper elements
    },
    text: {
      primary: '#2C3E50', // Soft Gray - Primary text color
      secondary: '#FFFFFF', // White - For text on dark backgrounds
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

