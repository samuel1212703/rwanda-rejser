import React from 'react';
import { Box, Typography, Button } from '@mui/material';
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
            <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
                By {post.author} on {new Date(post.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {post.content}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => window.history.back()}>
                Back to Blog
            </Button>
        </Box>
    );
}

export default BlogPostDetail;
