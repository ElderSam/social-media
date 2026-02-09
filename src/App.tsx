import { useEffect, useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <div className='app-container'>
      {username && <Header />}

      {username 
        ? 
        <MainPage username={username} /> 
        : 
        <SignUpPage onSignUp={setUsername} />
      }
    </div>
  );
}

export default App;
