// components/Navbar.tsx
import { AppBar, Toolbar, Button, Box, Link } from '@mui/material';
import { ethers } from 'ethers';

const Navbar = () => {



    async function connectWallet() {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                console.log("Connected to wallet: ", await signer.getAddress());
            } catch (error) {
                console.error("User denied account access", error);
            }
        } else {
            console.log("MetaMask is not installed");
        }
    }

    return (
        <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, transparent, black)', boxShadow: 'none', padding: '10px 20px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Box
                            sx={{
                                width: '65px',
                                height: '63px',
                                backgroundImage: `url('/image/file4.png')`, // Make sure image is in public folder
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />

                        <Box
                            sx={{
                                width: '65px',
                                height: '63px',
                                backgroundImage: `url('/image/minati token 1.png')`, // Make sure image is in public folder
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </Box>

                    {/* Navigation Links */}
                    <Box sx={{ display: 'flex', gap: 6 }}>
                        <Link href="#" underline="none" sx={{ color: '#FFFFFF', fontSize: '15px', fontFamily: 'Roboto' }}>
                            HOME
                        </Link>
                        <Link href="#" underline="none" sx={{ color: '#FFFFFF', fontSize: '15px', fontFamily: 'Roboto' }}>
                            WHITEPAPER
                        </Link>
                        <Link href="#" underline="none" sx={{ color: '#FFFFFF', fontSize: '15px', fontFamily: 'Roboto' }}>
                            TOKENOMICS
                        </Link>
                        <Link href="#" underline="none" sx={{ color: '#FFFFFF', fontSize: '15px', fontFamily: 'Roboto' }}>
                            ROADMAP
                        </Link>
                        <Link href="#" underline="none" sx={{ color: '#FFFFFF', fontSize: '15px', fontFamily: 'Roboto' }}>
                            CONTACT
                        </Link>
                    </Box>
                </Box>

                {/* Connect Wallet Button */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#D50D6B',
                        color: '#FFFFFF',
                        fontSize: '16px',
                        padding: '10px 20px'
                    }}
                    onClick={connectWallet}
                >
                    Connect Wallet
                </Button>
                {/* <ConnectButton /> */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
