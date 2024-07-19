import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TilbudTyping } from '../AppRouter';


const Rejsetilbud: React.FC<TilbudTyping[]> = (tilbud) => {
    return (
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
            <Grid container spacing={4}>
                {tilbud.map((t, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <a href={t.sti}>
                            <Card sx={{
                                width: '100%', padding: '1.5%', boxShadow: 4, borderRadius: 2, transition: 'transform 0.3s', '&:hover': {
                                    transform: 'scale(1.05)', borderRadius: 1
                                }
                            }}>
                                <CardMedia
                                    component="img"
                                    image={t.billeder[0]['src']}
                                    alt={t.billeder[0]['alt']}
                                    sx={{ objectFit: 'cover', height: { xs: '40vh', sm: '50vh', md: '60vh', lg: '70vh' } }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {t.titel}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t.beskrivelse}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Rejsetilbud;
