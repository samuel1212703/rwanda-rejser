import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from 'react-router-dom';
import backgroundImage from '../images/rwanda2.jpg';

export default function ForsideInformation() {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '4rem 0',
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            />
            <Container sx={{ maxWidth: 'sm', position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                    Om Rwanda
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                    Rwanda, også kendt som "De tusind bakker land", er et land beliggende i Øst-Central Afrika. Det er kendt for sin fantastiske naturskønhed, herunder bjerge, søer og en rig biodiversitet med et væld af vilde dyr, herunder de berømte bjerggorillaer.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                    Hovedstaden Kigali er en af de reneste og mest sikre byer i Afrika. Rwanda har en rig kulturarv og en befolkning kendt for deres gæstfrihed og venlighed.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                    Landet har overvundet en tumultarisk fortid og har oplevet en bemærkelsesværdig genopretning og økonomisk vækst. I dag er Rwanda en fremtrædende destination for turister, der søger eventyr, afslapning og kulturel fordybelse.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/om-rwanda"
                    sx={{ marginTop: '2rem', backgroundColor: '#ff9800', '&:hover': { backgroundColor: '#e68900' } }}
                >
                    Læs Mere
                </Button>
            </Container>
        </Box>
    );
}
