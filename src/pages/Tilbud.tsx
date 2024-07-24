import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { TilbudTyping } from '../types';
import { TilbudPakke } from './TilbudPakke';
import './tilbud.css'
import { useTranslation } from 'react-i18next';
import { TilbudCard } from '../components/tilbud/TilbudCard';

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
                <div style={{margin: 48}}>
                    <Typography variant="h3" component="h1" sx={{ marginBottom: 4 }}>
                        {t('tilbud_overskrift')}
                    </Typography>
                    <Grid container spacing={4}>
                        {tilbudData.map((tilbud, index) => (
                            <Grid item xs={12} md={12} key={index}>
                                <a href={tilbud.sti} style={{textDecoration: 'none'}}>
                                    <TilbudCard tilbud={tilbud} />
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </Box>
    );
}

export default Tilbud;
