
import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', onLoad);

    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(delay);
      
    };
  }, []);

  return (
    <div className='app'>
      {isLoading ? (
        <LoadingScreen/>
      ) : null}
          <Header/>
          <NavBar/>
          <Footer/>
    </div>
  );
}

export default App;


    
