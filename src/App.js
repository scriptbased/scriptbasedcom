import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <p>This is a simple website hosted on Netlify.</p>
        <a href="/404">
          <button>404</button>
        </a>
        <a href="/503">
          <button>503</button>
        </a>
        <button>Other</button>
      </main>
      <footer>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
}

export default App;