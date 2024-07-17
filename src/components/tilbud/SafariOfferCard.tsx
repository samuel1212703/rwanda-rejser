import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { SafariOffer } from '../../pages/Safari/Safari';

interface SafariOfferCardProps {
    offer: SafariOffer;
    onClick: () => void;
}

const SafariOfferCard: React.FC<SafariOfferCardProps> = ({ offer, onClick }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px' }}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={offer.images[0].src}
                    alt={offer.images[0].alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {offer.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {offer.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default SafariOfferCard;
