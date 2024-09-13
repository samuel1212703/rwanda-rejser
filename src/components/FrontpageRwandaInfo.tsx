import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import backgroundImage from '../images/rwanda2.jpg';
import Fade from '@mui/material/Fade';

export default function FrontpageRwandaInfo() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '5rem 0',
                textAlign: 'center',
                overflow: 'hidden',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 2, width: { xs: '90%', sm: '70%', md: '50%' } }}>
                <Fade in timeout={1500}>
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        sx={{ 
                            fontWeight: 'bold', 
                            mb: 4, 
                            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' } 
                        }}
                    >
                        Om Rwanda
                    </Typography>
                </Fade>
                <Fade in timeout={2000}>
                    <Box sx={{ mb: 4 }}>
                        {[
                            "Rwanda, også kendt som 'De tusind bakker land', er et land beliggende i Øst-Central Afrika. Det er kendt for sin fantastiske naturskønhed, herunder bjerge, søer og en rig biodiversitet med et væld af vilde dyr, herunder de berømte bjerggorillaer.",
                            "Hovedstaden Kigali er en af de reneste og mest sikre byer i Afrika. Rwanda har en rig kulturarv og en befolkning kendt for deres gæstfrihed og venlighed.",
                            "Landet har overvundet en tumultarisk fortid og har oplevet en bemærkelsesværdig genopretning og økonomisk vækst. I dag er Rwanda en fremtrædende destination for turister, der søger eventyr, afslapning og kulturel fordybelse."
                        ].map((text, index) => (
                            <Typography 
                                key={index} 
                                variant="body1" 
                                sx={{ 
                                    mb: 3, 
                                    lineHeight: 1.75, 
                                    fontSize: { xs: '1rem', md: '1.125rem' } 
                                }}
                            >
                                {text}
                            </Typography>
                        ))}
                    </Box>
                </Fade>
                <Button
                    variant="contained"
                    color="warning"
                    component={Link}
                    to="/rwanda"
                    sx={{
                        mt: 4,
                        backgroundColor: theme.palette.accent.main,
                        '&:hover': { backgroundColor: theme.palette.accent.dark, transform: 'scale(1.05)' },
                        padding: '10px 20px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Læs Mere
                </Button>
            </Container>
        </Box>
    );
}
