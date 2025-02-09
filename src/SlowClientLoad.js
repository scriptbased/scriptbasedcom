import React, { useEffect } from 'react';
import './App.css'; // Use the main CSS file for consistent styling

const SlowClientLoad = () => {
  useEffect(() => {
    const loadingOverlay = document.getElementById('loading-overlay');
    console.time('loadEventDuration');

    const startTime = performance.now();

    function simulateSlowProcessing(duration) {
      const endTime = startTime + duration;
      while (performance.now() < endTime) {
        Math.sqrt(Math.random());
      }
    }

    // Simulate slow processing
    simulateSlowProcessing(2000);
    simulateSlowProcessing(3000);
    simulateSlowProcessing(1000);

    console.timeEnd('loadEventDuration');

    // Hide the loading overlay when done
    loadingOverlay.style.display = 'none';
  }, []);

  return (
    <div className="App">
      <header>
        <img src="/controlup_apps_for_dark_background.png" alt="ControlUp for Apps Logo" className="logo" />
        <h1>ControlUp for Apps - Demo</h1>
      </header>
      <main>
        <h1>Simulated Slow Client</h1>
        <div id="loading-overlay">
          <div className="loader"></div>
        </div>
        <div id="container"></div>
      </main>
      <footer>
        <p>&copy; 2025 Joel Stocker - ControlUp</p>
      </footer>
    </div>
  );
};

export default SlowClientLoad;