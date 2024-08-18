import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import patrickBillede from '../images/people/patrick.jpg'

const OmOs: React.FC = () => {
    const teamMembers = [
        {
            name: "Patrick Illunga",
            role: "Founder & CEO",
            image: patrickBillede,
            description: "Patrick has a passion for travel and adventure, and founded Rwanda Travels to share the beauty of Rwanda with the world."
        },
        {
            name: "Jane Doe",
            role: "Marketing Manager",
            image: "/images/jane.jpg",
            description: "Jane is an expert in travel marketing, ensuring that our tours reach a global audience."
        },
        {
            name: "John Smith",
            role: "Tour Guide",
            image: "/images/john.jpg",
            description: "John has extensive knowledge of Rwanda's landscapes and wildlife, providing exceptional experiences for our clients."
        }
    ];

    return (
        <Container>
            <Box sx={{ padding: '2rem 0' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                    Om os
                </Typography>

                <Box sx={{ marginBottom: '3rem' }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        Vores Prioriteter
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                        Hos Rwanda Travels er vores højeste prioritet at give vores kunder uforglemmelige oplevelser. Vi tror på bæredygtig turisme og arbejder tæt sammen med lokale samfund for at sikre, at vores rejser har en positiv indvirkning på både vores gæster og de destinationer, vi besøger.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                        Vi er forpligtet til at tilbyde autentiske rejseoplevelser, der viser Rwandas skønhed og kultur. Vores ture er designet til at være både spændende og oplysende, og vi stræber efter at overgå vores kunders forventninger i enhver henseende.
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        Vores Team
                    </Typography>
                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Avatar
                                        alt={member.name}
                                        src={member.image}
                                        sx={{ width: 100, height: 100, marginBottom: '1rem', marginLeft: 'auto', marginRight: 'auto' }}
                                    />
                                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: '0.5rem' }}>
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2">
                                        {member.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default OmOs;
