import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import BlogPostCard from './BlogPostCard';
import BlogPostDetail from './BlogPostDetail';
import { BlogPost } from './types';
import axios from 'axios';

const Blog: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        axios.get<BlogPost[]>('http://localhost:1337/api/blog-posts')
            .then(response => {
                const posts = response.data.map((post: any) => ({
                    id: post.id,
                    ...post.attributes,
                }));
                setBlogPosts(posts);
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
            });

        // Check if the user is admin (dummy check for now, replace with actual logic)
        setIsAdmin(true); // Set this dynamically based on your authentication logic
    }, []);

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
    }

    const handleAddPost = () => {
        // Redirect to add post page or open a modal for adding a new post
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
                    {isAdmin && (
                        <Button variant="contained" color="primary" onClick={handleAddPost} sx={{ marginBottom: 4 }}>
                            Add New Post
                        </Button>
                    )}
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
