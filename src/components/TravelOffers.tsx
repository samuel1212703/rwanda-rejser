import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { OfferTyping } from '../types';

const TravelOffers: React.FC<OfferTyping[]> = (offer: OfferTyping[]) => {
    return (
        <Box sx={{ flexGrow: 1, padding: { xs: '10px', sm: '20px' } }}>
            <Grid container spacing={4}>
                {offer.map((t, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <a href={t.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card
                                sx={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    borderRadius: 3,
                                    boxShadow: 4,
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 8,
                                    },
                                    overflow: 'hidden',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={t.images[0]['src']}
                                    alt={t.images[0]['alt']}
                                    sx={{
                                        objectFit: 'cover',
                                        height: { xs: '35vh', sm: '45vh', md: '55vh' },
                                        transition: 'transform 0.3s ease-in-out',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {t.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TravelOffers;
