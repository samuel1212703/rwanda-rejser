import React from 'react';
import { useTranslation } from 'react-i18next';

// Icons
import IntegrityIcon from '@mui/icons-material/CheckCircleOutline';
import FlexibilityIcon from '@mui/icons-material/Loop';
import TrustIcon from '@mui/icons-material/ThumbUp';
import TransparencyIcon from '@mui/icons-material/Visibility';
import CustomerFocusIcon from '@mui/icons-material/People';
import InnovationIcon from '@mui/icons-material/Lightbulb';
import { Box, Grid, Typography, useTheme } from '@mui/material';

const Priorities = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const icon_size = 40
    const values = [
        { icon: <IntegrityIcon sx={{fontSize: icon_size}}/>, title: t('about.priorities.first.title'), description: t('about.priorities.first.description') },
        { icon: <FlexibilityIcon sx={{fontSize: icon_size}} />, title: t('about.priorities.second.title'), description: t('about.priorities.second.description') },
        { icon: <TrustIcon sx={{fontSize: icon_size}} />, title: t('about.priorities.third.title'), description: t('about.priorities.third.description') },
        { icon: <TransparencyIcon sx={{fontSize: icon_size}} />, title: t('about.priorities.fourth.title'), description: t('about.priorities.fourth.description') },
        { icon: <CustomerFocusIcon sx={{fontSize: icon_size}} />, title: t('about.priorities.fifth.title'), description: t('about.priorities.fifth.description') },
        { icon: <InnovationIcon sx={{fontSize: icon_size}} />, title: t('about.priorities.sixth.title'), description: t('about.priorities.sixth.description') },]

    return (
        values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ backgroundColor: theme.palette.common.white }}>
                <Box sx={{ display: 'block', alignItems: 'center', marginTop: '1rem' }}>
                    {value.icon}
                    <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold' }}>
                        {value.title}
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ padding: '1rem' }}>
                    {value.description}
                </Typography>
            </Grid>
        ))
    )
};

export default Priorities;
