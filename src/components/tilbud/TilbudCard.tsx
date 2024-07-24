import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { TilbudTyping } from "../../types"


interface TilbudCardProps {
    tilbud: TilbudTyping
}

export const TilbudCard: React.FC<TilbudCardProps> = ({ tilbud }) => {
    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
                component="img"
                height="300"
                image={tilbud.billeder[0]?.src || 'default-image.jpg'}
                alt={tilbud.billeder[0]?.alt || 'Offer Image'}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {tilbud.titel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tilbud.beskrivelse}
                </Typography>
            </CardContent>
        </Card>
    )
} 