import './App.css';
import NavigationsBar from './components/NavigationsBar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import './i18n'; // Multi Language Support
import Frontpage from './pages/Forside';
import Kontakt from './pages/Kontakt';
import OmOs from './pages/OmOs';
import IngenSide from './pages/IngenSide';
import Blog from './pages/Blog/Blog';
import OmRwanda from './pages/OmRwanda';
import Tilbud from './pages/Tilbud';
import { useTranslation } from 'react-i18next';
import getOffers from './tilbudData';
import { SideInfo } from './types';

export default function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const tilbud = getOffers(currentLang);

  const sider: SideInfo[] = [
    { 'titel': t('forside_navn'), 'sti': '', 'komponent': <Frontpage /> },
    { 'titel': t('tilbud_side_navn'), 'sti': 'tilbud', 'komponent': <Tilbud tilbudData={tilbud} /> },
    { 'titel': t('om_os_side_navn'), 'sti': 'om-os', 'komponent': <OmOs /> },
    { 'titel': t('kontakt_side_navn'), 'sti': 'kontakt', 'komponent': <Kontakt /> },
    { 'titel': t('blog_side_navn'), 'sti': 'blog', 'komponent': <Blog /> },
    { 'titel': t('rwanda_info_side_navn'), 'sti': 'om-rwanda', 'komponent': <OmRwanda /> },
    { 'titel': '', 'sti': '*', 'komponent': <IngenSide /> },
  ];

  tilbud.forEach((tilbud) => {
    sider.push({ 'titel': tilbud.titel, 'sti': tilbud.sti, 'komponent': <Tilbud tilbudData={tilbud} /> });
  });

  return (
    <div className='App'>
      <header>{NavigationsBar(sider)}</header>
      {AppRouter(sider)}
      <footer>{Footer()}</footer>
    </div>
  );
}
