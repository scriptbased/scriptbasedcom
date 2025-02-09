import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './404';
import ServiceUnavailable from './503';
import SlowLoad from './SlowLoad';
import SlowClientLoad from './SlowClientLoad';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/503" element={<ServiceUnavailable />} />
      <Route path="/slow-load" element={<SlowLoad />} />
      <Route path="/slow-client-load" element={<SlowClientLoad />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
