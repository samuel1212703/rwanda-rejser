import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import './i18n'; // Multi Language Support
import Frontpage from './pages/Frontpage';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Blog from './pages/Blog/Blog';
import Rwanda from './pages/Rwanda';
import Offers from './pages/Offers';
import { useTranslation } from 'react-i18next';
import getOffers from './offerData';
import { OfferTyping, PageInfo } from './types';
import { Suspense, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const offer: OfferTyping[] = getOffers(currentLang);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    i18n.on('loaded', () => {
      setIsLoading(false);
    });
  }, [i18n]);

  const sider: PageInfo[] = [
    { 'title': t('frontpage.name'), 'path': '', 'component': <Frontpage /> },
    { 'title': t('offers.name'), 'path': 'offers', 'component': <Offers offerData={offer} /> },
    { 'title': t('about.name'), 'path': 'about', 'component': <About /> },
    { 'title': t('contact.name'), 'path': 'contact', 'component': <Contact /> },
    { 'title': t('blog.name'), 'path': 'blog', 'component': <Blog /> },
    { 'title': t('rwanda.name'), 'path': 'rwanda', 'component': <Rwanda /> },
    { 'title': '', 'path': '*', 'component': <NoPage /> },
  ];

  offer.forEach((offer) => {
    sider.push({ 'title': offer.title, 'path': offer.path, 'component': <Offers offerData={offer} /> });
  });

  return (
    <div className='App'>
      <header>{NavigationBar(sider)}</header>
      <Suspense fallback={<LoadingSpinner />}>
        {isLoading ? <LoadingSpinner /> : AppRouter(sider)}
      </Suspense>
      <footer>{Footer()}</footer>
    </div>
  );//
}
