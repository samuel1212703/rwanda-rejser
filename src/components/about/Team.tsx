import React from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material';
import patrickBillede from '../../images/people/patrick.jpg';

const Team = () => {
    const { t } = useTranslation();
    const theme = useTheme();
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
        teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ border: 5, textAlign: 'center', backgroundColor: theme.palette.common.white, padding: 5 }}>
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
        ))
    )
};

export default Team;
