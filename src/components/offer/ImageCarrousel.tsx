import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/material';

interface BilledeKarruselProps {
    images: Array<{ src: string, alt: string }>;
}

const BilledeKarrusel: React.FC<BilledeKarruselProps> = ({ images }) => {
    return (
        <Box sx={{ maxWidth: '100%', margin: 'auto', marginBottom: 4 }}>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
                    </div>
                ))}
            </Carousel>
        </Box>
    );
}

export default BilledeKarrusel;
