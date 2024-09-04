import React, { useState } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { OfferTyping } from '../types';
import { Offer } from './Offer';
import { OfferCard } from '../components/offer/Card';
import { useTranslation } from 'react-i18next';

interface OfferProps {
    offerData: OfferTyping[] | OfferTyping;
}

const isOfferArray = (data: OfferTyping | OfferTyping[]): data is OfferTyping[] => {
    return Array.isArray(data);
}

const Offers: React.FC<OfferProps> = ({ offerData }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const [selectedOffer, setSelectedOffer] = useState<OfferTyping | null>(
        isOfferArray(offerData) ? offerData[0] : offerData
    );
    const handleOfferClick = (offer: OfferTyping) => {
        setSelectedOffer(offer);
    };

    return (
        <Box>
            {isOfferArray(offerData) ? (
                <Box sx={{ margin: 3 }}>
                    <Typography variant="h3" component="h1" sx={{ marginBottom: 4, color: theme.palette.common.white }}>
                        {t('offers.title')}
                    </Typography>
                    <Grid container spacing={4}>
                        {offerData.map((offer, index) => (
                            <Grid item sm={6} md={4} key={index}>
                                <Box
                                    onClick={() => handleOfferClick(offer)}
                                    sx={{
                                        cursor: 'pointer',
                                        border: selectedOffer === offer ? '2px solid #3f51b5' : '2px solid transparent',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <OfferCard offer={offer} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ) : (
                <div className='background-pattern' style={{ width: '100%' }}>
                    <Offer offer={offerData} />
                </div>
            )}

            {selectedOffer && (
                <Box sx={{ marginTop: 3, padding: 4, backgroundColor: theme.palette.common.white, borderRadius: '8px' }}>
                    <Typography variant="h4" component="h2" sx={{ marginBottom: 4 }}>
                        {selectedOffer.title}
                    </Typography>
                    <Offer offer={selectedOffer} />
                </Box>
            )}
        </Box>
    );
}

export default Offers;
