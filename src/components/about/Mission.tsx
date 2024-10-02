import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import SustainabilityIcon from '@mui/icons-material/NaturePeople';
import SafetyIcon from '@mui/icons-material/Security';

const Mission = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const icon_size = 60;
    const subValues = [{ icon: <SafetyIcon sx={{fontSize: icon_size}} />, title: t('about.mission.first.title'), description: t('about.mission.first.description') }, { icon: <SustainabilityIcon sx={{fontSize: icon_size}} />, title: t('about.mission.second.title'), description: t('about.mission.first.description') }]

    return (
        subValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
                <Box sx={{ alignItems: 'center', margin: '1rem', padding: '2rem', backgroundColor: theme.palette.common.white }}>
                    <Box sx={{ marginTop: '1rem' }}>
                        {value.icon}
                        <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                            {value.title}
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ padding: '1rem' }}>
                        {value.description}
                    </Typography>
                </Box>
            </Grid>
        ))
    )
};

export default Mission;
