import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ControlUp for Apps - Demo</h1>
      </header>
      <main>
        <p>Select what you want this SaaS app to do</p>
        <a href="/404">
          <button>404</button>
        </a>
        <a href="/503">
          <button>503</button>
        </a>
        <button>Other</button>
      </main>
      <footer>
        <p>&copy; 2025 Joel Stocker - ControlUp</p>
      </footer>
    </div>
  );
}

export default App;