// components/StakePanel.tsx
import { Box, Typography, InputAdornment, Button, TextField } from '@mui/material';
import Image from 'next/image'; // If you're using Next.js, else you can use <img>
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import CONTRACT_ABI from '../contracts/MinatiStaking.json';

const CONTRACT_ADDRESS = "0xc6bafF5F9E3681024984CeA85F6fa8D4f0991AD6"; // Replace with your staking contract address

const StakePanel = () => {
    const [active, setActive] = useState<'stake' | 'claim'>('stake');
    const [stakeAmount, setStakeAmount] = useState(''); // State to hold the amount to be staked

    const handleStake = async () => {
        try {
            // Check if an amount is entered
            if (!stakeAmount) {
                alert("Please enter an amount to stake.");
                return;
            }

            // Connect to the provider (assuming the user is using MetaMask)
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            console.log('signer', signer);

            // Instantiate the contract
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

            // Convert the stake amount to the appropriate unit (e.g., wei if the contract uses wei)
            const amount = ethers.utils.parseEther(stakeAmount);
            const stakerAddress = await signer.getAddress(); // Or provide a specific address

            // Call the stake function on the contract
            const tx = await contract.stake(amount, stakerAddress);
            console.log("Staking transaction sent:", tx);

            // Wait for the transaction to be mined
            await tx.wait();
            console.log("Staking transaction confirmed:", tx);

            alert("Staking successful!");

            // Clear the input field after successful staking
            setStakeAmount('');
        } catch (error) {
            if (error.code === "ACTION_REJECTED") {
                console.error("Transaction rejected by user.");
                alert("Transaction was rejected. Please confirm in MetaMask to proceed.");
            } else {
                console.error("Transaction failed:", error);
            }
        }
    };

    return (
        <Box
            sx={{
                width: '550px',
                height: '809px',
                backgroundColor: '#000',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                padding: '25px',
                color: '#E8E9F0',
                position: 'relative',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontFamily: '"Sofia", sans-serif;',
                    textAlign: 'center',
                    top: '35px',
                    fontSize: '30px',
                    fontWeight: 400,
                    lineHeight: '36px',
                    color: '#E8E9F00',
                    marginBottom: 6,
                }}
            >
                STAKE TOKEN
            </Typography>

            <Box
                sx={{
                    position: 'relative',
                    width: '500px',
                    height: '65px',
                    background: '#2D2828',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 3,
                }}
            >
                {/* STAKE Button */}
                <Box
                    onClick={() => setActive('stake')}
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '5px 20px',
                        gap: '20px',
                        position: 'absolute',
                        width: '250px',
                        height: '65px',
                        left: '0px',
                        top: '0px',
                        background: active === 'stake' ? '#000000' : 'transparent',
                        border: active === 'stake' ? '2px solid rgba(255, 255, 255, 0.6)' : 'none',
                        borderRadius: '100px',
                        cursor: 'pointer',
                        transition: 'background 0.3s',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Zen Dots',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#E8E9F0',
                        }}
                    >
                        STAKE
                    </Typography>
                </Box>

                {/* CLAIM TOKENS Button */}
                <Box
                    onClick={() => setActive('claim')}
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '5px 20px',
                        gap: '20px',
                        position: 'absolute',
                        width: '250px',
                        height: '65px',
                        left: '250px',
                        top: '0px',
                        background: active === 'claim' ? '#000000' : 'transparent',
                        border: active === 'claim' ? '2px solid rgba(255, 255, 255, 0.6)' : 'none',
                        borderRadius: '100px',
                        cursor: 'pointer',
                        transition: 'background 0.3s',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Zen Dots',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#E8E9F0',
                        }}
                    >
                        CLAIM TOKENS
                    </Typography>
                </Box>
            </Box>

            <Typography variant="body2" sx={{ color: '#E8E9F0', marginBottom: 3 }}>
                Stake your Minati Token to earn MB Tokens in the form of cryptocurrency through secure and reliable way.
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 3,
                    width: '500px',
                    height: '221px',
                    borderRadius: '15px',
                    backgroundColor: '#231E1E',
                    backgroundImage: `url('/image/file 4 (1).png')`, // Make sure image is in public folder
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flex: 1, // Ensures equal width for each column
                    }}
                >
                    <Box>
                        <Typography variant="body1" padding={'4px'} fontSize={'14px'} fontWeight="bold">REFERRAL REWARD</Typography>
                        <Typography variant="h5" fontSize={'28px'} color="#D8B977">10.00%</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" padding={'4px'} fontSize={'14px'} fontWeight="bold">TOTAL EARNED</Typography>
                        <Typography variant="h5" fontSize={'28px'} color="#FF0078">$2,925.21</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flex: 1, // Ensures equal width for each column
                    }}
                >
                    <Box>
                        <Typography variant="body1" padding={'4px'} fontSize={'14px'} fontWeight="bold">STAKE REWARD</Typography>
                        <Typography variant="h5" fontSize={'28px'} color="#FF0078">30.00%</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" padding={'4px'} fontSize={'14px'} fontWeight="bold">TOTAL STAKED</Typography>
                        <Typography variant="h5" fontSize={'28px'} color="#FF0078">$719.18</Typography>
                    </Box>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', padding: 1, justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '16px',
                        lineHeight: '22px',
                        fontWeight: 400,
                    }}
                >
                    <span>Stake: MINATI (</span>
                    <span style={{ color: '#AE7D30' }}>MNTC</span>
                    <span>)</span>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '16px',
                        lineHeight: '22px',
                        fontWeight: 400,
                    }}
                >
                    <span>Available: 120.12 </span>
                    <span style={{ color: '#AE7D30' }}>MINATI</span>
                </Typography>
            </Box>

            <TextField
                variant="outlined"
                fullWidth
                placeholder="0.00" // Only "0.00" as placeholder
                value={stakeAmount} // Bind input value to stakeAmount state
                onChange={(e) => setStakeAmount(e.target.value)} // Update state on change
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Image src="/image/minati token 1 (1).png" alt="icon" width={40} height={40} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {/* Red "MINATI" text on the right side */}
                            <Typography
                                sx={{
                                    color: '#AE7D30', // Red color for "MINATI"
                                    fontSize: '20px',
                                    fontWeight: 400,
                                }}
                            >
                                MINATI
                            </Typography>

                            {/* MAX button */}
                            <Button
                                sx={{
                                    boxSizing: 'border-box',
                                    width: '104px',
                                    height: '48px',
                                    padding: '15px 30px',
                                    color: '#E8E9F0',
                                    border: '1px solid #D8B977',
                                    borderRadius: '100px',
                                    textTransform: 'none',
                                    fontWeight: 400,
                                    lineHeight: '18px',
                                    fontSize: '15px',
                                }}
                            >
                                MAX
                            </Button>
                        </InputAdornment>
                    ),
                    sx: {
                        backgroundColor: '#2D2828',
                        color: 'white',
                        border: '1px solid #5F8FE1',
                        borderRadius: '50px',
                        fontSize: '20px',
                        height: '80px',
                        '& input::placeholder': {
                            color: '#FFFFFF', // White color for "0.00"
                            opacity: 1,
                        },
                    },
                }}
                sx={{
                    marginBottom: 6,
                    color: '#FFFFFF',
                    height: '80px',
                }}
            />

            <Button
                variant="contained"
                fullWidth
                onClick={handleStake} // Attach handleStake to onClick
                sx={{
                    backgroundColor: '#D50D6B',
                    fontFamily: '"Sofia", sans-serif',
                    padding: '17px 25px',
                    textAlign: 'left',
                    height: '80px',
                    borderRadius: '10px',
                    display: 'flex',               // Flexbox for aligning items
                    justifyContent: 'space-between', // Space between text and image
                    alignItems: 'center',           // Center items vertically
                    marginBottom: 2,
                }}
            >
                <span
                    style={{
                        fontSize: '20px',
                        lineHeight: '95px',
                        fontWeight: 400,
                    }}
                >STAKE NOW</span>

                {/* Replace src with your image path */}
                <Image
                    src="/image/Down Button.png"
                    alt="icon"
                    width={40}
                    height={40}
                />
            </Button>

            <Typography variant="caption" sx={{ color: '#E8E9F0', textAlign: 'center', display: 'block' }}>
                <span style={{ fontSize: '14px', lineHeight: '19px', fontWeight: 400 }}>0x4245f51E59733B7c9416eB - </span>
                <span style={{ color: '#D8B977', fontSize: '14px', lineHeight: '19px', fontWeight: 400 }}>COPY REFERRAL LINK</span>
            </Typography>
        </Box >
    );
};

export default StakePanel;
