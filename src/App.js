import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { colors } from './theme/colors';

// Create custom theme using centralized colors
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.green,
      contrastText: colors.neutral.white,
    },
    secondary: {
      main: colors.primary.orange,
      contrastText: colors.neutral.white,
    },
    background: {
      default: colors.background.main,
      paper: colors.background.card,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.gray,
    },
    success: {
      main: colors.primary.green,
    },
    warning: {
      main: colors.primary.orange,
    },
    divider: colors.border.light,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: '0 !important',
          borderTopLeftRadius: '0 !important',
          borderTopRightRadius: '0 !important',
          borderBottomLeftRadius: '0 !important',
          borderBottomRightRadius: '0 !important',
        },
      },
    },
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/about':
        return <AboutUs />;
      case '/contact':
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: colors.background.main }}>
        <Header />
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <Box sx={{ flex: 1 }}>
          {renderPage()}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
