
import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 1.5 seconds to show the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header/>
          <NavBar/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
