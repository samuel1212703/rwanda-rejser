import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import rwandaImage from '../images/rwanda.jpg';
import { useTranslation } from 'react-i18next';

const OmRwanda: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                {t('rwanda.title')}
            </Typography>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: 'auto',
                    marginBottom: '2rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                src={rwandaImage}
                alt="Rwanda"
            />
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                {t('omrwanda1')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                {t('omrwanda2')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                {t('omrwanda3')}
            </Typography>
        </Container>
    );
};

export default OmRwanda;
