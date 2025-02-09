import React, { useEffect } from 'react';
import './SlowClientLoad.css'; // Make sure to create and style this CSS file

const SlowClientLoad = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const numItems = 200; // Number of graphical elements
    const batchSize = 10; // Number of elements to render per frame
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    console.time('renderTime');

    // Function to create and append items
    function createItems(startIndex) {
      for (let i = startIndex; i < startIndex + batchSize && i < numItems; i++) {
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

      if (startIndex + batchSize < numItems) {
        requestAnimationFrame(() => createItems(startIndex + batchSize));
      } else {
        console.timeEnd('renderTime');
      }
    }

    // Introduce a deliberate delay before starting animation
    setTimeout(() => requestAnimationFrame(() => createItems(0)), 2000); // 2-second delay
  }, []);

  return <div id="container" className="container"></div>;
};

export default SlowClientLoad;