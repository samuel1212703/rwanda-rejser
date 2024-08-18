import { Box, Typography, Link, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation()

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#2c3e50',
                color: 'white',
                padding: '2rem 0',
                marginTop: '2rem'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            {t('footer.title')}
                        </Typography>
                        <Typography variant="body1">
                            Patrick Illunga
                            <br />
                            tlf: <Link href="tel:+4512345678" color="inherit" underline="hover">(+45) 12345678</Link>
                            <br />
                            mail: <Link href="mailto:kontakt@mail.com" color="inherit" underline="hover">kontakt@mail.com</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            {t('footer.title2')}
                        </Typography>
                        <Typography variant="body1">
                            {t('companyName')}
                            <br />
                            {t('companyAddress')}
                            <br />
                            tlf: <Link href="tel:+250789456123" color="inherit" underline="hover">(+250) 789456123</Link>
                            <br />
                            mail: <Link href="mailto:info@rwandatravels.com" color="inherit" underline="hover">info@rwandatravels.com</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            {t('footer.socialMediaTitle')}
                        </Typography>
                        <Typography variant="body1">
                            <Link href="#" color="inherit" underline="hover" sx={{ marginRight: '0.5rem' }}>Facebook</Link>
                            <Link href="#" color="inherit" underline="hover" sx={{ marginRight: '0.5rem' }}>Instagram</Link>
                            <Link href="#" color="inherit" underline="hover">Twitter</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Typography variant="body2" color="textSecondary">
                        &copy; {new Date().getFullYear()} {t('companyName')}. {t('footer_rettigheder')}.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
