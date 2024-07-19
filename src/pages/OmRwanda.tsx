import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import rwandaImage from '../images/rwanda.jpg';

const OmRwanda: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Om Rwanda
            </Typography>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: 'auto',
                    marginBottom: '2rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                src={rwandaImage}
                alt="Rwanda"
            />
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Rwanda, også kendt som "De tusind bakker land", er et land beliggende i Øst-Central Afrika. Det er kendt for sin fantastiske naturskønhed, herunder bjerge, søer og en rig biodiversitet med et væld af vilde dyr, herunder de berømte bjerggorillaer.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Hovedstaden Kigali er en af de reneste og mest sikre byer i Afrika. Rwanda har en rig kulturarv og en befolkning kendt for deres gæstfrihed og venlighed.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                Landet har overvundet en tumultarisk fortid og har oplevet en bemærkelsesværdig genopretning og økonomisk vækst. I dag er Rwanda en fremtrædende destination for turister, der søger eventyr, afslapning og kulturel fordybelse.
            </Typography>
        </Container>
    );
};

export default OmRwanda;
