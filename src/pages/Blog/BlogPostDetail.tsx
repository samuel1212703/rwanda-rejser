import React from 'react';
import { Box, Typography } from '@mui/material';
import { BlogPost } from './types';

interface BlogPostDetailProps {
    post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
                {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ marginBottom: 2 }}>
                By {post.author} on {post.date}
            </Typography>
            <img src={post.image} alt={post.title} style={{ width: '100%', marginBottom: '20px' }} />
            <Typography variant="body1" component="p">
                {post.content}
            </Typography>
        </Box>
    );
}

export default BlogPostDetail;
