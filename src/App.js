import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/controlup_apps_for_dark_background.png" alt="ControlUp for Apps Logo" className="logo" />
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
        <a href="/slow-load">
          <button>Slow Backend Load</button>
        </a>
        <a href="/slow-client-load">
          <button>Slow Client Load</button>
        </a>
      </main>
      <footer>
        <p>&copy; 2025 Joel Stocker - ControlUp</p>
      </footer>
    </div>
  );
}

export default App;