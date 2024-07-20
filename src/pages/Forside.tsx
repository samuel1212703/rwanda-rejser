import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Rejsetilbud from '../components/Rejsetilbud';
import IntroBillede from '../images/rwanda1.jpg';
import ForsideBillede from '../components/ForsideBillede';
import TrustpilotReviews from '../components/TrustpilotReviews';
import ForsideInformation from '../components/ForsideInformation';
import getOffers from '../tilbudData';
import { useTranslation } from 'react-i18next';

export default function Frontpage() {
    const { i18n, t } = useTranslation();

    return (
        <div>
            <ForsideBillede forsideBillede={IntroBillede}></ForsideBillede>
            <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                    {t('rejsepakker_overskrift')}
                </Typography>
                <Box sx={{ marginBottom: '2rem' }}>
                    {Rejsetilbud(getOffers(i18n.language))}
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                    {t('trustpilot_overskrift')}
                </Typography>
                <TrustpilotReviews />
            </Container>
            <ForsideInformation />
        </div>
    );
}
