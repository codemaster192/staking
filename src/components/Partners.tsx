import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Partners = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%', // To make it responsive
                height: '840px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background Gradient Circles */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    left: '958px',
                    top: '244px',
                    background: 'linear-gradient(180deg, rgba(142, 189, 234, 0.3) 0%, rgba(0, 128, 201, 0.3) 100%)',
                    filter: 'blur(150px)',
                    borderRadius: '200px',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    left: '39px',
                    top: '79px',
                    background: 'linear-gradient(180deg, rgba(184, 32, 104, 0.3) 0%, rgba(255, 0, 120, 0.3) 100%)',
                    filter: 'blur(150px)',
                    borderRadius: '200px',
                }}
            />

            {/* FAQ Section Content */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '40px 132px',
                    gap: '50px',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* Section Header */}
                <Typography
                    sx={{
                        fontFamily: 'Zen Dots',
                        fontSize: '48px',
                        lineHeight: '58px',
                        color: '#E8E9F0',
                        textAlign: 'center',
                    }}
                >
                    PARTNERS
                </Typography>

                {/* Partners Grid */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '12px 265px',
                        gap: '50px',
                        width: '1176px',
                        height: '274px',
                    }}
                >
                    {/* Partner Logos */}
                    <Box
                        sx={{
                            position: 'relative',
                            width: '250px',
                            height: '250px',
                        }}
                    >
                        <Image src="/image/minati token.png" alt="Minati Token" layout="fill" objectFit="contain" />
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '60px',
                            height: '60px',
                        }}
                    >
                        <Image src="/image/X.png" alt="Partner Logo" layout="fill" objectFit="contain" />
                    </Box>

                    <Box
                        sx={{
                            position: 'relative',
                            width: '250px',
                            height: '250px',
                        }}
                    >
                        <Image src="/image/file 2.png" alt="Partner Logo" layout="fill" objectFit="contain" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Partners;
