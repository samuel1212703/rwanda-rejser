import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Priorities from '../components/about/Priorities';
import Team from '../components/about/Team';
import Mission from '../components/about/Mission';

const About: React.FC = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Container maxWidth="xl">
            <Box sx={{ padding: '2rem 0' }}>
                <Box sx={{ marginBottom: '3rem' }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '2rem', color: theme.palette.common.white }}>
                        {t('about.mission.title')}
                    </Typography>
                    <Grid container>
                        {Mission()}
                    </Grid>
                </Box>
                <Box sx={{ marginBottom: '3rem' }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '2rem', color: theme.palette.common.white }}>
                        {t('about.team.title')}
                    </Typography>
                    <Grid container>
                        {Team()}
                    </Grid>
                </Box>
                <Box>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '2rem', color: theme.palette.common.white }}>
                        {t('about.priorities.title')}
                    </Typography>
                    <Grid container>
                        {Priorities()}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default About;
