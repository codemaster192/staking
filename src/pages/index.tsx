// pages/index.tsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'Nutino', // Include fallback fonts
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#000', color: '#E8E9F0', minHeight: '100vh' }}>
        <Navbar />
        <HeroSection />
        <Partners />
        <Footer />
      </Box>
    </ThemeProvider>

  );
};

export default HomePage;
