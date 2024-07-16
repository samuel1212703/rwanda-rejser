import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Side-komponenter
import Frontpage from './pages/Forside';
import Kontakt from './pages/Kontakt';
import IngenSide from './pages/IngenSide';
import Tilbud from './pages/Tilbud';
import Blog from './pages/Blog/Blog';
import Overnatning from './pages/Overnatning';

export interface TilbudTyping {
    sti: string;
    kortTitel: string;
    titel: string;
    beskrivelse: string;
    billeder: Array<{ src: string, alt: string }>;
}

// Tilbud
const tilbudBilleder = [
    { 'alt': '', 'src': '' }
]
export const tilbudData: TilbudTyping[] = [
    { 'sti': 'safari', 'kortTitel': 'Safaritur', 'titel': 'Guidet safari I Rwandas vilde natur', 'beskrivelse': 'Safaritur I Rwandas vilde natur', 'billeder': tilbudBilleder }
]

export const sider = [
    { 'titel': 'Forside', 'sti': '', 'komponent': <Frontpage /> },
    { 'titel': 'Overnatning', 'sti': 'overnatning', 'komponent': <Overnatning /> }, // Tilbud index 1
    { 'titel': 'Kontakt', 'sti': 'kontakt', 'komponent': <Kontakt /> },
    { 'titel': 'Tilbud', 'sti': 'tilbud', 'komponent': <Tilbud offerData={tilbudData} /> },
    { 'titel': 'Blog', 'sti': 'blog', 'komponent': <Blog /> },
    { 'titel': 'Lidt om Rwanda', 'sti': 'om-rwanda', 'komponent': <IngenSide /> },
    { 'titel': '', 'sti': '*', 'komponent': <IngenSide /> },
]

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {sider.map((side) => { // Sider
                    return (
                        <Route path={"/" + side.sti} element={side.komponent} />
                    )
                })}
                {tilbudData.map((tilbud) => { // Tilbud Sider
                    return (
                        <Route path={'/tilbud/' + tilbud.sti} element={<Tilbud offerData={tilbudData} />} />
                    )
                })}
            </Routes>
        </BrowserRouter>
    );
}
