import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import ImageGallery from '../components/tilbud/BilledeGalleri';
import { TilbudTyping } from '../AppRouter';

interface TilbudProps {
    offerData: TilbudTyping[] | TilbudTyping;
}

const isOfferArray = (data: TilbudTyping | TilbudTyping[]): data is TilbudTyping[] => {
    return Array.isArray(data);
}

const Tilbud: React.FC<TilbudProps> = ({ offerData }) => {
    return (
        <Box sx={{ padding: '20px' }}>
            {!isOfferArray(offerData) ? (
                <>
                    <ImageGallery images={offerData.billeder} />
                    <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
                        {offerData.titel}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {offerData.beskrivelse}
                    </Typography>
                </>
            ) : (
                <>
                    <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
                        Få den Pakke der Passer Dig
                    </Typography>
                    <Grid container spacing={4}>
                        {offerData.map((offer, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={offer.billeder[0]?.src || 'default-image.jpg'}
                                        alt={offer.billeder[0]?.alt || 'Offer Image'}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {offer.titel}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {offer.beskrivelse}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    );
}

export default Tilbud;
