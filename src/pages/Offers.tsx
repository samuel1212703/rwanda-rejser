import React, { useState } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { OfferTyping } from '../types';
import { Offer } from './Offer';
import { OfferCard } from '../components/offer/Card';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface OfferProps {
    offerData: OfferTyping[] | OfferTyping;
}

const isOfferArray = (data: OfferTyping | OfferTyping[]): data is OfferTyping[] => {
    return Array.isArray(data);
}

const Offers: React.FC<OfferProps> = ({ offerData }) => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box>
            {isOfferArray(offerData) ? (
                <Box sx={{ margin: 3 }}>
                    <Typography variant="h3" component="h1" sx={{ marginBottom: 4, color: theme.palette.common.white }}>
                        {t('offers.title')}
                    </Typography>
                    <Grid container spacing={4}>
                        {offerData.map((offer, index) => (
                            offer.type === 'standard' ? 
                            <Grid item sm={6} md={4} key={index}>
                                <Box
                                >
                                    <Link to={offer.path} style={{ textDecoration: 'none' }}>
                                        <OfferCard offer={offer} />
                                    </Link>
                                </Box>
                            </Grid> : null
                        ))}
                        <Typography variant="h4" component="h1" sx={{ width: '100%', marginTop: 4, color: theme.palette.common.white }}>
                            Til Studenter
                        </Typography>
                        {offerData.map((offer, index) => (
                            offer.type === 'student' ? 
                            <Grid item sm={6} md={4} key={index}>
                                <Box
                                >
                                    <Link to={offer.path} style={{ textDecoration: 'none' }}>
                                        <OfferCard offer={offer} />
                                    </Link>
                                </Box>
                            </Grid> : null
                        ))}
                    </Grid>
                </Box>
            ) : (
                <div className='background-pattern' style={{ width: '100%' }}>
                    <Offer offer={offerData} />
                </div>
            )}
        </Box>
    );
}

export default Offers;
