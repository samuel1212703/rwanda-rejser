import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { OfferTyping } from "../../types"


interface OfferCardProps {
    offer: OfferTyping
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
                component="img"
                height="300"
                image={offer.images[0]?.src || 'default-image.jpg'}
                alt={offer.images[0]?.alt || 'Offer Image'}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {offer.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {offer.description}
                </Typography>
            </CardContent>
        </Card>
    )
} 