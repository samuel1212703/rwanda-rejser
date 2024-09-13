import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { OfferTyping } from "../../types";

interface OfferCardProps {
    offer: OfferTyping;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
    return (
        <Card
            sx={{
                boxShadow: 6,
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 10,
                },
                overflow: 'hidden', // Ensure the image doesn't overflow the card
            }}
        >
            <CardMedia
                component="img"
                height="300"
                image={offer.images[0]?.src || 'default-image.jpg'}
                alt={offer.images[0]?.alt || 'Offer Image'}
                sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.1)', // Zoom the image on hover
                    },
                }}
            />
            <CardContent
                sx={{
                    padding: { xs: '16px', sm: '24px' }, // Increase padding for better spacing
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
                        marginBottom: '10px',
                    }}
                >
                    {offer.title}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        fontSize: { xs: '0.875rem', sm: '1rem' }, // Slightly larger font on larger screens
                        lineHeight: 1.6, // Improve readability with good line-height
                    }}
                >
                    {offer.description.length > 100
                        ? `${offer.description.substring(0, 100)}...` // Truncate if too long
                        : offer.description}
                </Typography>
            </CardContent>
        </Card>
    );
};
