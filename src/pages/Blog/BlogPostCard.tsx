import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { BlogPost } from './types';

interface BlogPostCardProps {
    post: BlogPost;
    onClick: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onClick }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px' }}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={post.image}
                    alt={post.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BlogPostCard;
