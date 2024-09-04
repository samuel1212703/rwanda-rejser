import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Icon, useTheme } from '@mui/material';
import patrickBillede from '../images/people/patrick.jpg';
import IntegrityIcon from '@mui/icons-material/CheckCircleOutline';
import FlexibilityIcon from '@mui/icons-material/Loop';
import SafetyIcon from '@mui/icons-material/Security';
import TrustIcon from '@mui/icons-material/ThumbUp';
import TransparencyIcon from '@mui/icons-material/Visibility';
import CustomerFocusIcon from '@mui/icons-material/People';
import InnovationIcon from '@mui/icons-material/Lightbulb';
import SustainabilityIcon from '@mui/icons-material/NaturePeople';

const OmOs: React.FC = () => {
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

    const values = [
        { icon: <IntegrityIcon />, title: "Integritet", description: "Det er en kerneværdi for os, at vi altid handler med høj integritet i vores virksomhed. Vores mål er at levere ærlige og pålidelige rejseoplevelser, hvor vi opretholder de højeste standarder for etik og moral i alle aspekter af vores arbejde." },
        { icon: <FlexibilityIcon />, title: "Fleksibilitet", description: "Vi bestræber os på at være fleksible for at imødekomme dine behov. Vi forstår, at hver rejse er unik, og vi arbejder tæt sammen med vores kunder for at tilpasse vores pakkerejser, så de passer præcis til dine ønsker og forventninger." },
        { icon: <TrustIcon />, title: "Tillid", description: "Vi er ydmyge og taknemmelige over den tillid, du viser os ved at vælge os som din rejsearrangør. Vi vil gøre alt for at sikre, at denne tillid er berettiget. Vi har erfaring med, at en rejse til Rwanda er en særlig oplevelse for den enkelte rejsende, og derfor er vi engagerede i at gøre denne rejse til et uforglemmeligt eventyr." },
        { icon: <TransparencyIcon />, title: "Transparens", description: "Det er afgørende for os, at du har fuld indsigt i, hvad der sker både før og under dit ophold i Rwanda. Vi ønsker, at du er informeret og bevidst om, hvad du betaler for. Derfor er transparens en af vores kerneværdier, som vi blandt andet opretholder ved at orientere dig om priser for alt, der tilrettelagt under rejsen. Vi tror på, at åbenhed styrker tilliden mellem os og vores kunder og reducerer risikoen for misforståelser." },
        { icon: <CustomerFocusIcon />, title: "Kundeorienteret", description: "Vi sætter vores kunder i centrum for alt, hvad vi gør. Dine behov og ønsker er vores højeste prioritet, og vi arbejder utrætteligt på at sikre, at din oplevelse med os, forhåbentligt, overgår dine forventninger. Populært sagt, så er din tilfredshed vores succes." },
        { icon: <InnovationIcon />, title: "Innovation", description: "Vi stræber efter konstant innovation i vores tjenester og produkter. Vi er altid på udkig efter nye og spændende måder at forbedre dine rejseoplevelser på ved at holde os opdaterede relevante tendenser inden for rejsebranchen og oplevelsesmuligheder i Rwanda. Vores ønske er, at Rwanda skal være blandt danskernes rejsedestinationer." },
    ];

    const subValues = [{ icon: <SafetyIcon />, title: "Sikkerhed og professionalisme", description: "Din sikkerhed under opholdet i Rwanda er afgørende for os. Rwanda er et af de sikreste lande i Afrika, hvorfor du i udgangspunkt ikke skal være bekymret for din sikkerhed. Vi sørger for, at du er velinformeret om de relevante sikkerhedsforanstaltninger og regler som besøgende. Vores professionelle team, både dansktalende medarbejder og lokale rwandere, er dedikerede til at sikre, at din rejse bliver både sikker og mindeværdig." }, { icon: <SustainabilityIcon />, title: "Bæredygtighed", description: "Vi er optagede af og engagerede i at deltage og fremme bæredygtig turisme i Rwanda. Vores primære samarbejdspartnere er lokale rwandere, hvilket betyder, at din rejse dertil er med at skabe jobmuligheder for dem. Vi sørger for, at vores samarbejdspartnere naturligvis skal aflønnes i overensstemmelse med gældende retningslinjer i landet og med det stykke arbejde, de udfører. Ligeledes arbejder vi målrettet for, at aktiviteter har en positiv indvirkning på miljøet og samfundet. Vi ønsker at bidrage til at bevare Rwandas naturlige skønhed og kulturarv for fremtidige generationer, samtidig med at vi tilbyder uforglemmelige rejseoplevelser." }]

    return (
        <Container maxWidth="xl">
            <Box sx={{ padding: '2rem 0' }}>

                <Box sx={{ marginBottom: '3rem' }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                        Vores Prioriteter
                    </Typography>

                    <Grid container spacing={4} style={{ marginTop: '1rem' }}>
                        {values.map((value, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{backgroundColor: "rgba(255, 255, 255, 0.77)", marginBottom: '1rem'}}>
                                <Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem' }}>
                                    {value.icon}
                                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                                        {value.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{marginBottom: '1rem'}}>
                                    {value.description}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>


                <Box>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                        Holdet
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

                <Box>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                        Vores Mission
                    </Typography>

                    <Grid container spacing={4}>
                        {subValues.map((value, index) => (
                            <Grid item xs={12} sm={6} md={6} key={index}>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    {value.icon}
                                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>
                                        {value.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2">
                                    {value.description}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default OmOs;
