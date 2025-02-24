import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3065FC',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6F00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    success: {
      main: '#2e7d32',
      contrastText: '#ffffff',
    },
    error: {
      main: '#c62828',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ed6c02',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0288d1',
      contrastText: '#ffffff',
    },
    // Custom palette key
    brand: {
      main: '#1976d2',
      contrastText: '#ffffff',
      pink: '#FE65FD',
    },
  },
  typography: {
    // Montserrat as the primary font with fallbacks
    fontFamily: '"Montserrat", "Roboto", sans-serif',
    h1: { fontSize: '2.125rem', fontWeight: 500 },
    h2: { fontSize: '1.75rem', fontWeight: 500 },
    h3: { fontSize: '1.5rem', fontWeight: 500 },
    h4: { fontSize: '1.25rem', fontWeight: 500 },
    h5: { fontSize: '1rem', fontWeight: 500 },
    h6: { fontSize: '0.875rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 8,
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: 'none',
        },
      },
    },
  },
});

export default theme;
