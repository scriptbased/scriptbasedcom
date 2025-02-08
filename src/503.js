import React from 'react';

function ServiceUnavailable() {
  return (
    <div className="ErrorPage">
      <h1>503 - Service Unavailable</h1>
      <p>The server is currently unavailable. Please try again later.</p>
    </div>
  );
}

export default ServiceUnavailable;