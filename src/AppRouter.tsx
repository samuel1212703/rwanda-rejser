import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Import your page components
import { SideInfo } from './types';

export default function AppRouter(sider: SideInfo[]) {
    return (
        <Routes>
            {sider.map((side, index) => (
                <Route key={index} path={"/" + side.sti} element={side.komponent} />
            ))}
        </Routes>
    );
}
