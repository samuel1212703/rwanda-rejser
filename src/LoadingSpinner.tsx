// LoadingSpinner.tsx
import { useTheme } from '@mui/material';
import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner: React.FC = () => {
    const theme = useTheme()

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <ClipLoader style={{ display: 'block', margin: '0 auto', borderColor: 'red' }} size={50} color={theme.palette.primary.main} loading={true} />
        </div>
    );
};

export default LoadingSpinner;
