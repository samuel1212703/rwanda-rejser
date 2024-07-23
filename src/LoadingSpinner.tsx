// LoadingSpinner.tsx
import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner: React.FC = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <ClipLoader style={{ display: 'block', margin: '0 auto', borderColor: 'red' }} size={50} color={"#123abc"} loading={true} />
        </div>
    );
};

export default LoadingSpinner;
