import React from 'react';
import { Box, Typography } from '@mui/material';

interface ForsideProps {
    forsideBillede: string;
}

const ForsideBillede: React.FC<ForsideProps> = ({ forsideBillede }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: { xs: '50vh', sm: '60vh', md: '70vh', lg: '74vh' },
                    objectFit: 'cover',
                }}
                src={forsideBillede}
                alt="Rwanda"
            />
            <Box
                sx={{
                    position: 'absolute',
                    color: 'white',
                    left: '50%',
                    bottom: '35%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    padding: { xs: '10px', sm: '15px' },
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                }}
            >
                <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    Rejser til Rwanda
                </Typography>
                <Typography variant="subtitle1" component="sub">
                    Er du klar til dit livs eventyr?
                </Typography>
            </Box>
        </Box>
    );
};

export default ForsideBillede;
