// components/HeroSection.tsx
import { Box, Typography } from '@mui/material';
import StakePanel from './StakePanel';

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '1000px',
                overflow: 'hidden',
                color: '#E8E9F0',
            }}
        >
            {/* Background Gradient Overlays */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '50%',
                    height: '50%',
                    left: '0%',
                    top: '10%',
                    background: 'linear-gradient(180deg, rgba(184, 32, 104, 0.55) 0%, rgba(255, 0, 120, 0.55) 100%)',
                    filter: 'blur(150px)',
                    borderRadius: '500px',
                    opacity: 0.8,
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '60%',
                    height: '60%',
                    left: '50%',
                    top: '15%',
                    background: 'linear-gradient(180deg, rgba(142, 189, 234, 0.5) 0%, rgba(0, 128, 201, 0.5) 100%)',
                    filter: 'blur(150px)',
                    borderRadius: '100px',
                    opacity: 0.8,
                    zIndex: 1,
                }}
            />

            {/* Centered MINEBLUE Text */}
            <Typography
                variant="h1"
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '35%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: 'Zen Dots, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '310px',
                    lineHeight: '240px',
                    color: '#000',
                    zIndex: 2,
                }}
            >
                MINEBLUE
            </Typography>

            {/* Main Content Container */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '57%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    gap: 0,
                    zIndex: 2,
                }}
            >
                {/* StakePanel */}
                <StakePanel />

                {/* Image Container */}
                <Box
                    sx={{
                        width: '853px',
                        height: '954px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E8E9F0',
                        overflow: 'hidden',
                        backgroundImage: `url('/image/cyberpunk-city-street-night-with-neon-lights-futuristic-aesthetic.png')`, // Make sure image is in public folder
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
