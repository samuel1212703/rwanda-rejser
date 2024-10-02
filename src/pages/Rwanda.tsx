import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import rwandaImage from '../images/rwanda.jpg';
import { useTranslation } from 'react-i18next';

const OmRwanda: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
            <Typography variant="h4" component="h1" sx={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
                {t('rwanda.title')}
            </Typography>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                src={rwandaImage}
                alt="Rwanda"
            />
            <Box sx={{backgroundColor: 'white', padding: 2}}>
                <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                    {t('rwanda.about1')}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                    {t('rwanda.about2')}
                </Typography>
                <Typography variant="body1">
                    {t('rwanda.about3')}
                </Typography>
            </Box>
        </Container>
    );
};

export default OmRwanda;
