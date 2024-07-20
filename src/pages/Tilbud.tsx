import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { TilbudTyping } from '../types';
import { TilbudPakke } from './TilbudPakke';
import './tilbud.css'
import { useTranslation } from 'react-i18next';

interface TilbudProps {
    tilbudData: TilbudTyping[] | TilbudTyping;
}

const isOfferArray = (data: TilbudTyping | TilbudTyping[]): data is TilbudTyping[] => {
    return Array.isArray(data);
}

const Tilbud: React.FC<TilbudProps> = ({ tilbudData }) => {
    const { t } = useTranslation()

    return (
        <Box>
            {!isOfferArray(tilbudData) ? (
                <div className='background-pattern' style={{ width: '100%' }}>
                    <TilbudPakke tilbud={tilbudData}></TilbudPakke>
                </div>
            ) : (
                <>
                    <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
                        {t('tilbud_overskrift')}
                    </Typography>
                    <Grid container spacing={4}>
                        {tilbudData.map((tilbud, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <a href={tilbud.sti}>
                                    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={tilbud.billeder[0]?.src || 'default-image.jpg'}
                                            alt={tilbud.billeder[0]?.alt || 'Offer Image'}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {tilbud.titel}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {tilbud.beskrivelse}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    );
}

export default Tilbud;
