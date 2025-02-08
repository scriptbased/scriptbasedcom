import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handle404 = () => {
    navigate('/404');
  };

  const handle503 = () => {
    navigate('/503');
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <p>This is a simple website hosted on Netlify.</p>
        <button onClick={handle404}>404</button>
        <button onClick={handle503}>503</button>
        <button>Other</button>
      </main>
      <footer>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
}

export default App;