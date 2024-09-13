import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ForsideProps {
    frontpageImage: string;
}

const FrontpageImage: React.FC<ForsideProps> = ({ frontpageImage }) => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '60vh', sm: '65vh', md: '70vh', lg: '80vh' }, // Consistent height for all screens
                overflow: 'hidden',
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${frontpageImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                transition: 'all 0.5s ease',
                padding: { xs: '10px', sm: '15px' }, // Add padding to avoid cramped content
                boxSizing: 'border-box', // Ensures padding doesn't affect container size
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    zIndex: 2,
                    padding: { xs: '10px', sm: '15px' },
                    width: '100%', // Ensure it stretches full width
                    height: '100%', // Ensure it stretches full height
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center content vertically
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}
                >
                    {t('frontpage.welcomeTitle')}
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '2rem' },
                        marginBottom: '20px',
                    }}
                >
                    {t('frontpage.welcomeSubtitle')}
                </Typography>
            </Box>
        </Box>
    );
};

export default FrontpageImage;
