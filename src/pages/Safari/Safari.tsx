import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SafariOfferCard from '../../components/tilbud/SafariOfferCard';
import SafariOfferDetail from '../../components/tilbud/SafariOfferDetail';

export interface SafariOffer {
    id: number;
    title: string;
    description: string;
    images: Array<{ src: string, alt: string }>;
}

const safariOffers: SafariOffer[] = [
    {
        id: 1,
        title: 'Great Migration Safari',
        description: 'Witness the spectacular Great Migration in Serengeti.',
        images: [
            { src: 'migration1.jpg', alt: 'Great Migration' },
            { src: 'migration2.jpg', alt: 'Herds of Wildebeest' },
        ],
    },
    {
        id: 2,
        title: 'Big Five Safari',
        description: 'Experience close encounters with Africa’s Big Five.',
        images: [
            { src: 'bigfive1.jpg', alt: 'Lion' },
            { src: 'bigfive2.jpg', alt: 'Elephant' },
        ],
    },
    {
        id: 3,
        title: 'Luxury Safari in Kenya',
        description: 'Enjoy a luxurious safari in the heart of Kenya.',
        images: [
            { src: 'kenya1.jpg', alt: 'Luxury Lodge' },
            { src: 'kenya2.jpg', alt: 'Kenyan Safari' },
        ],
    },
];

const Safari: React.FC = () => {
    const [selectedOffer, setSelectedOffer] = useState<SafariOffer | null>(null);

    const handleOfferClick = (offer: SafariOffer) => {
        setSelectedOffer(offer);
    }

    return (
        <Box sx={{ padding: '20px' }}>
            {selectedOffer ? (
                <SafariOfferDetail offer={selectedOffer} />
            ) : (
                <>
                    <Typography variant="h3" component="h1" sx={{ marginBottom: 4 }}>
                        Safari Tilbud
                    </Typography>
                    <Grid container spacing={4}>
                        {safariOffers.map((offer) => (
                            <Grid item xs={12} sm={6} md={4} key={offer.id}>
                                <SafariOfferCard offer={offer} onClick={() => handleOfferClick(offer)} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    );
}

export default Safari;
