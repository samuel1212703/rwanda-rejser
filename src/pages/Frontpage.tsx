import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import TravelOffers from '../components/TravelOffers';
import IntroImage from '../images/rwanda1.jpg';
import FrontpageImage from '../components/FrontpageImage';
//import TrustpilotReviews from '../components/TrustpilotReviews';
import FrontpageRwandaInfo from '../components/FrontpageRwandaInfo';
import getOffers from '../offerData';
import { useTranslation } from 'react-i18next';
import Fade from '@mui/material/Fade';

export default function Frontpage() {
    const { i18n, t } = useTranslation();

    return (
        <div style={{color: 'white'}}>
            <FrontpageImage frontpageImage={IntroImage} />
            <Container maxWidth="xl" sx={{ padding: '2rem 0' }}>
                <Fade in timeout={1000}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        {t('offers.title')}
                    </Typography>
                </Fade>
                <hr style={{ border: '1px solid white', marginBottom: '2rem' }} />
                <Box sx={{ marginBottom: '2rem' }}>
                    <Fade in timeout={1500}>
                        <div>{TravelOffers(getOffers(i18n.language))}</div>
                    </Fade>
                </Box>
                {/* <Fade in timeout={2000}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        Trustpilot
                    </Typography>
                </Fade>
                <TrustpilotReviews /> */}
            </Container>
            <FrontpageRwandaInfo />
        </div>
    );
}
