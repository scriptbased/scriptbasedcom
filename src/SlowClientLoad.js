import React, { useEffect } from 'react';

const SlowClientLoad = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const numItems = 5000; // Number of elements to generate

    console.time('renderTime'); // Start timing

    for (let i = 0; i < numItems; i++) {
      const item = document.createElement('div');
      item.className = 'item';
      item.textContent = `Item ${i + 1}: This is some dynamically generated content.`;
      container.appendChild(item);
    }

    console.timeEnd('renderTime'); // End timing and log to console
  }, []);

  return <div id="container"></div>;
};

export default SlowClientLoad;