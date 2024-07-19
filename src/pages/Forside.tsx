import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Rejsetilbud from '../components/Rejsetilbud';
import IntroBillede from '../images/rwanda1.jpg';
import ForsideBillede from '../components/ForsideBillede';
import TrustpilotReviews from '../components/TrustpilotReviews';
import ForsideInformation from '../components/ForsideInformation';
import { tilbudData } from '../AppRouter';

export default function Frontpage() {
    return (
        <div>
            <ForsideBillede forsideBillede={IntroBillede}></ForsideBillede>
            <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                    Vores Rejsepakker
                </Typography>
                <Box sx={{ marginBottom: '2rem' }}>
                    {Rejsetilbud(tilbudData)}
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                    Trustpilot Reviews
                </Typography>
                <TrustpilotReviews />
            </Container>
            <ForsideInformation />
        </div>
    );
}
