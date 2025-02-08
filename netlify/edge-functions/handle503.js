export default async (request, context) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>503 - Service Unavailable</title>
      <style>
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #081E3D;
          color: #ffffff;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 2.5em;
          margin-bottom: 0.5em;
        }
        p {
          font-size: 1.2em;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>503 - Service Unavailable</h1>
        <p>The server is currently unavailable. Please try again later.</p>
      </div>
    </body>
    </html>
  `;

  return new Response(html, {
    status: 503,
    headers: {
      "content-type": "text/html",
    },
  });
};