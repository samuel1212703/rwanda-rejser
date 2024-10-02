import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';

// Define the type for a review
interface Review {
    title: string;
    text: string;
    stars: number;
    createdAt: string;
}

// Define the API response type
interface ApiResponse {
    reviews: Review[];
}

const API_URL = `https://api.trustpilot.com/v1/business-units/${process.env.REACT_APP_TRUSTPILOT_BUSINESS_UNIT_ID}/reviews`;
const API_KEY = process.env.REACT_APP_TRUSTPILOT_API_KEY;

const TrustpilotReviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get<ApiResponse>(API_URL, {
                    headers: {
                        'Authorization': `Basic ${API_KEY}`
                    }
                });
                setReviews(response.data.reviews);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Trustpilot reviews:', error);
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
            <Grid container spacing={4}>
                {reviews.map((review, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {review.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {review.text}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                    Rating: {review.stars} / 5
                                </Typography>
                                <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
                                    {new Date(review.createdAt).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default TrustpilotReviews
