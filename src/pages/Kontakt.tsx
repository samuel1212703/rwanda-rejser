import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const Kontakt: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ padding: '2rem 0' }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Kontakt Os
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                Har du spørgsmål eller brug for mere information? Udfyld venligst formularen nedenfor, og vi vender tilbage til dig hurtigst muligt.
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField label="Navn" variant="outlined" fullWidth required />
                <TextField label="Email" variant="outlined" fullWidth required type="email" />
                <TextField label="Telefonnummer" variant="outlined" fullWidth />
                <TextField
                    label="Besked"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                />
                <Button variant="contained" color="primary" size="large" sx={{ alignSelf: 'flex-start' }}>
                    Send Besked
                </Button>
            </Box>
        </Container>
    );
};

export default Kontakt;
