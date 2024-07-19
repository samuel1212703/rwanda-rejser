import { Route, Routes } from 'react-router-dom';
// Side-komponenter
import Frontpage from './pages/Forside';
import Kontakt from './pages/Kontakt';
import IngenSide from './pages/IngenSide';
import Blog from './pages/Blog/Blog';
import Overnatning from './pages/Overnatning';
import OmRwanda from './pages/OmRwanda';
import Tilbud from './pages/Tilbud';

import tilbud1 from './images/t1.jpg';
import tilbud2 from './images/t2.jpg';
import tilbud3 from './images/t3.jpg';

export interface TilbudTyping {
    sti: string;
    langTitel: string;
    titel: string;
    beskrivelse: string;
    billeder: Array<{ src: string, alt: string }>;
    komponent?: JSX.Element;
}

export const tilbudData: TilbudTyping[] = [
    { 'sti': 'tilbud/safari', 'titel': 'Safaritur', 'langTitel': 'Guidet safari I Rwandas vilde natur', 'beskrivelse': 'Safaritur I Rwandas vilde natur', 'billeder': [{ 'alt': 'safari', 'src': tilbud1 }] },
    { 'sti': 'tilbud/cykel', 'titel': 'Cykeltur', 'langTitel': 'Cykeltur gennem Rwandas seje landskaber', 'beskrivelse': 'Safaritur I Rwandas vilde natur', 'billeder': [{ 'alt': 'safari', 'src': tilbud2 }] },
    { 'sti': 'tilbud/tre-uger', 'titel': 'Tre uger i Rwanda', 'langTitel': 'Tre fede uger i Rwanda', 'beskrivelse': 'Safaritur I Rwandas vilde natur', 'billeder': [{ 'alt': 'safari', 'src': tilbud3 }] },
];

export const sider = [
    { 'titel': 'Forside', 'sti': '', 'komponent': <Frontpage /> },
    { 'titel': 'Tilbud', 'sti': 'tilbud', 'komponent': <Tilbud offerData={tilbudData} /> },
    { 'titel': 'Overnatning', 'sti': 'overnatning', 'komponent': <Overnatning /> },
    { 'titel': 'Kontakt', 'sti': 'kontakt', 'komponent': <Kontakt /> },
    { 'titel': 'Blog', 'sti': 'blog', 'komponent': <Blog /> },
    { 'titel': 'Lidt om Rwanda', 'sti': 'om-rwanda', 'komponent': <OmRwanda /> },
    { 'titel': '', 'sti': '*', 'komponent': <IngenSide /> },
];

tilbudData.forEach((tilbud, index) => {
    sider.push({ 'titel': tilbud.titel, 'sti': tilbud.sti, 'komponent': <Tilbud offerData={tilbudData[index]} /> });
});

export default function AppRouter() {
    return (
        <Routes>
            {sider.map((side, index) => (
                <Route key={index} path={"/" + side.sti} element={side.komponent} />
            ))}
        </Routes>
    );
}
