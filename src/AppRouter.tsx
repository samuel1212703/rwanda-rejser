import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import Frontpage from './pages/Forside';
import Kontakt from './pages/Kontakt';
import IngenSide from './pages/IngenSide';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Frontpage />} />
                <Route path='/kontakt' element={<Kontakt />} />
                <Route path='/*' element={<IngenSide />} />
            </Routes>
        </BrowserRouter>
    );
}
