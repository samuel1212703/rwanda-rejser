import React from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BilledeKarrusel from "../components/tilbud/BilledeKarrusel";
import { TilbudTyping } from '../types';
import { useTranslation } from 'react-i18next';

interface TilbudProps {
    tilbud: TilbudTyping
}

export const TilbudPakke: React.FC<TilbudProps> = ({ tilbud }) => {
    const { t } = useTranslation()
    const widthBreakpoints = { xs: '100%', sm: '90%', md: '80%', lg: '70%' }
    return (
        <Box sx={{ width: widthBreakpoints, boxShadow: '2px 5px 150px black', margin: '0 auto', padding: '20px', backgroundColor: 'white' }}>
            <BilledeKarrusel images={tilbud.billeder} />
            <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
                {tilbud.titel}
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: 4 }}>
                {tilbud.beskrivelse}
            </Typography>
            {tilbud.dagPlan && (
                <Box sx={{ width: widthBreakpoints, margin: '0 auto', marginTop: 4,  backgroundColor: "#483544", padding: 2, color: 'white' }}>
                    <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
                        <b>{t('dagsplan_overskrift')}</b>
                    </Typography>
                    <Grid container spacing={2}>
                        {tilbud.dagPlan.map((dag, index) => (
                            <Grid item xs={12} key={index}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index + 1}-content`}
                                        id={`panel${index + 1}-header`}
                                    >
                                        <Typography variant="h6" sx={{ textAlign: 'left', fontSize: { xs: 'x-small', sm: 'small', md: 'medium', lg: "large" } }}>
                                            {`Dag ${index + 1}`}
                                        </Typography>
                                        <Typography variant="h6" sx={{ minWidth: '90%', textAlign: 'center', fontSize: { xs: 'x-small', sm: 'small', md: 'medium', lg: "large" } }}>
                                            {dag.overskrift}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body1">
                                            {dag.beskrivelse}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
}
