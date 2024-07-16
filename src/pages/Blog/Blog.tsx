import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import BlogPostCard from './BlogPostCard';
import BlogPostDetail from './BlogPostDetail';
import { BlogPost } from './types';

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Discover Rwanda',
        author: 'Jane Doe',
        date: '2024-07-15',
        summary: 'An overview of the amazing experiences awaiting you in Rwanda.',
        content: 'Full content of the Discover Rwanda blog post.',
        image: 'image1.jpg',
    },
    {
        id: 2,
        title: 'Exploring the Alps',
        author: 'John Smith',
        date: '2024-07-10',
        summary: 'A guide to hiking and enjoying the majestic Alps.',
        content: 'Full content of the Exploring the Alps blog post.',
        image: 'image2.jpg',
    },
    {
        id: 3,
        title: 'Cultural Journey Through Japan',
        author: 'Alice Johnson',
        date: '2024-07-05',
        summary: 'Experience the unique culture and traditions of Japan.',
        content: 'Full content of the Cultural Journey Through Japan blog post.',
        image: 'image3.jpg',
    },
];

const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
    }

    return (
        <Box sx={{ padding: '20px' }}>
            {selectedPost ? (
                <BlogPostDetail post={selectedPost} />
            ) : (
                <>
                    <Typography variant="h3" component="h1" sx={{ marginBottom: 4 }}>
                        Blog
                    </Typography>
                    <Grid container spacing={4}>
                        {blogPosts.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.id}>
                                <BlogPostCard post={post} onClick={() => handlePostClick(post)} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    );
}

export default Blog;
