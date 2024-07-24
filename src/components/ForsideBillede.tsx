import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ForsideProps {
    forsideBillede: string;
}

const ForsideBillede: React.FC<ForsideProps> = ({ forsideBillede }) => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '60vh', sm: '65vh', md: '70vh', lg: '80vh' },
                overflow: 'hidden',
                background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${forsideBillede})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    animation: 'fadeIn 3s',
                    padding: { xs: '10px', sm: '15px' },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
                        letterSpacing: '0.1em',
                    }}
                >
                    {t('forside_velkomst')}
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem' },
                        marginBottom: '20px',
                    }}
                >
                    {t('forside_velkomst_undertitel')}
                </Typography>
            </Box>
        </Box>
    );
};

export default ForsideBillede;
