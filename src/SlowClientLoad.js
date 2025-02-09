import React, { useEffect } from 'react';
import './SlowClientLoad.css'; // Make sure to create and style this CSS file

const SlowClientLoad = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const numItems = 200; // Number of graphical elements
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    console.time('renderTime');

    // Use requestAnimationFrame for smoother animations
    function animate() {
      for (let i = 0; i < numItems; i++) {
        const item = document.createElement('div');
        item.className = 'item';

        // Random positioning
        const x = Math.random() * (containerWidth - 50);  // Subtract item width
        const y = Math.random() * (containerHeight - 50); // Subtract item height

        item.style.left = `${x}px`;
        item.style.top = `${y}px`;

        // Add some graphical complexity - example: gradient backgrounds
        item.style.background = `linear-gradient(to bottom right, hsl(${Math.random() * 360}, 100%, 50%), hsl(${Math.random() * 360}, 100%, 50%))`;

        container.appendChild(item);
      }
      console.timeEnd('renderTime');
    }

    // Introduce a deliberate delay before starting animation
    setTimeout(animate, 2000); // 2-second delay
  }, []);

  return <div id="container" className="container"></div>;
};

export default SlowClientLoad;