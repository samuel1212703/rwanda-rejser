import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationsBar from './components/NavigationsBar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

export default function App() {
  return (
    <div className='App'>      
      <header><NavigationsBar /></header>
      <AppRouter />
      <footer><Footer></Footer></footer>
    </div>
  );
}
