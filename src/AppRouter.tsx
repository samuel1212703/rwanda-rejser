import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Import your page components
import { PageInfo } from './types';

export default function AppRouter(sider: PageInfo[]) {
    return (
        <Routes>
            {sider.map((side, index) => (
                <Route key={index} path={"/" + side.path} element={side.component} />
            ))}
        </Routes>
    );
}
