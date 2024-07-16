import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Typography } from '@mui/material';

interface ImageGalleryProps {
    images: Array<{ src: string, alt: string }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <Box sx={{ maxWidth: '100%', margin: 'auto', marginBottom: 4 }}>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Carousel>
            <Typography variant="caption" display="block" textAlign="center" sx={{ mt: 2 }}>
                Swipe or use arrows to view more images
            </Typography>
        </Box>
    );
}

export default ImageGallery;
