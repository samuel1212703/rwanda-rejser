import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Kontakt: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Container maxWidth="md" sx={{ padding: '2rem 0' }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                {t('contact.title')}
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField label={t('contact.form.name')} variant="outlined" fullWidth required />
                <TextField label={t('contact.form.email')} variant="outlined" fullWidth required type="email" />
                <TextField label={t('contact.form.phone')} variant="outlined" fullWidth />
                <TextField
                    label={t('contact.form.message')}
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                />
                <Button variant="contained" color="primary" size="large" sx={{ alignSelf: 'flex-start' }}>
                    {t('contact.form.submit')}
                </Button>
            </Box>
        </Container>
    );
};

export default Kontakt;
