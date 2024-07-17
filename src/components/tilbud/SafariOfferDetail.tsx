import React from 'react';
import { Box, Typography, Grid, CardMedia } from '@mui/material';
import { SafariOffer } from '../../pages/Safari/Safari';

interface SafariOfferDetailProps {
    offer: SafariOffer;
}

const SafariOfferDetail: React.FC<SafariOfferDetailProps> = ({ offer }) => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
                {offer.title}
            </Typography>
            <Grid container spacing={2}>
                {offer.images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={image.src}
                            alt={image.alt}
                            sx={{ borderRadius: 2 }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
                {offer.description}
            </Typography>
        </Box>
    );
}

export default SafariOfferDetail;
