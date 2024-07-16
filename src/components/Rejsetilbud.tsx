import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface TilbudProps {
    tilbud: Array<{ titel: string, beskrivelse: string, billede: string }>
}

export default function Rejsetilbud({ tilbud }: TilbudProps) {
    return (
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
            <Grid container spacing={4}>
                {tilbud.map((t, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ maxWidth: 445, boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={t.billede}
                                alt={t.titel}
                                sx={{ objectFit: 'cover' }}
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
