// components/Footer.tsx
import { Box, Typography, Link } from '@mui/material';
import { Twitter, Facebook, Telegram, Instagram } from '@mui/icons-material';
import Image from 'next/image'; // If you're using Next.js, else you can use <img>
import { relative } from 'path';

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', padding: '60px', color: '#E8E9F0' }}>
            <Box
                sx={{
                    position: 'relative',
                    width: '600px',
                    height: '600px',
                    zIndex: 0,
                    padding: '50px',
                }}
            >
                {/* Polygon Border */}
                <svg
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                >
                    <polygon
                        points="0,0 600,0 600,600 100,600 0, 400"
                        style={{ fill: 'none', stroke: 'rgba(0, 162, 255, 0.55)', strokeWidth: 2 }}
                    />
                </svg>
                <Image
                    src="/image/file 2.png"
                    alt="icon"
                    width={155}
                    height={150}
                />
                <Typography variant="h5" marginTop={2} marginBottom={2} fontSize={30} fontFamily="Zen Dots">MINEBLUE</Typography>
                <Typography variant="body2" fontSize={24}>MINEBLUE is your AI-powered copilot for yield farming on Blast, offering multiple investment strategies tailored to your preferences</Typography>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '600px',
                    height: '600px',
                    zIndex: 0,
                    padding: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                >
                    <polygon
                        points="0,0 500,0 600,100 600,600 0,600"
                        style={{ fill: 'none', stroke: 'rgba(0, 162, 255, 0.55)', strokeWidth: 2 }}
                    />
                </svg>
                <Box
                    sx={{
                        width: '400px',
                        textAlign: 'right',
                        paddingRight: 10,
                    }}
                >
                    <Typography
                        variant="h5"
                        marginTop={10}
                        fontSize={30}
                        position={'relative'}
                        fontFamily="Zen Dots"
                        zIndex={2}
                    >Information</Typography>
                    <Box
                        sx={{
                            top: -20,
                            left: 160,
                            position: 'relative',
                            width: '180px',
                            height: '25px',
                            backgroundColor: 'rgba(255, 255, 255, 0.27)',
                            borderRadius: '5px',
                            zIndex: 1,
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        width: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginTop: 5,
                        zIndex: 5,
                    }}
                >
                    <Link href="#" color="inherit" fontSize={24} underline="none">Documentation</Link><br />
                    <Link href="#" color="inherit" fontSize={24} underline="none">Privacy Policy</Link><br />
                    <Link href="#" color="inherit" fontSize={24} underline="none">Terms and Conditions</Link><br />
                    <Link href="#" color="inherit" fontSize={24} underline="none">Referral Programs</Link><br />
                    <Link href="#" color="inherit" fontSize={24} underline="none">Tokenomics</Link>
                </Box>

            </Box>

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 0,
                    width: '600px',
                    height: '600px',
                    padding: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                >
                    <polygon
                        points="100,0 590,0 590,500 450,600 0, 600 0,100"
                        style={{ fill: 'none', stroke: 'rgba(0, 162, 255, 0.55)', strokeWidth: 2 }}
                    />
                </svg>
                <Box
                    sx={{
                        width: '400px',
                        textAlign: 'right',
                        paddingRight: 10,
                    }}
                >
                    <Typography
                        variant="h5"
                        marginTop={10}
                        fontSize={30}
                        position={'relative'}
                        fontFamily="Zen Dots"
                        zIndex={2}
                    >Social Media</Typography>
                    <Box
                        sx={{
                            top: -20,
                            left: 140,
                            position: 'relative',
                            width: '200px',
                            height: '25px',
                            backgroundColor: 'rgba(255, 255, 255, 0.27)',
                            borderRadius: '5px',
                            zIndex: 1,
                        }}
                    />
                </Box>


                <Box
                    sx={{
                        width: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginTop: 5,
                        zIndex: 5,
                    }}
                >
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="inherit" fontSize={24} underline="none"><Twitter sx={{ marginRight: 2, fontSize: '30px' }} />Twitter</Link><br />
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="inherit" fontSize={24} underline="none"><Facebook sx={{ marginRight: 2, fontSize: '30px' }} />Facebook</Link><br />
                    <Link href="https://telegram.com" target="_blank" rel="noopener noreferrer" color="inherit" fontSize={24} underline="none"><Telegram sx={{ marginRight: 2, fontSize: '30px' }} />Telegram</Link><br />
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" color="inherit" fontSize={24} underline="none"><Instagram sx={{ marginRight: 2, fontSize: '30px' }} />Instagram</Link>
                </Box>
            </Box>
        </Box >
    );
};

export default Footer;
