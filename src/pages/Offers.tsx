import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { OfferTyping } from '../types';
import { Offer } from './Offer';
import { OfferCard } from '../components/offer/Card';
import './Offers.css'
import { useTranslation } from 'react-i18next';


interface OfferProps {
    offerData: OfferTyping[] | OfferTyping;
}

const isOfferArray = (data: OfferTyping | OfferTyping[]): data is OfferTyping[] => {
    return Array.isArray(data);
}

const Offers: React.FC<OfferProps> = ({ offerData }) => {
    const { t } = useTranslation()

    return (
        <Box>
            {!isOfferArray(offerData) ? (
                <div className='background-pattern' style={{ width: '100%' }}>
                    <Offer offer={offerData}></Offer>
                </div>
            ) : (
                <div style={{margin: 48}}>
                    <Typography variant="h3" component="h1" sx={{ marginBottom: 4 }}>
                        {t('offer.title')}
                    </Typography>
                    <Grid container spacing={4}>
                        {offerData.map((offer, index) => (
                            <Grid item xs={12} md={12} key={index}>
                                <a href={offer.path} style={{textDecoration: 'none'}}>
                                    <OfferCard offer={offer} />
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </Box>
    );
}

export default Offers;
