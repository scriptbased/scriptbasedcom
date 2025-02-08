export default async (request, context) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 - Page Not Found</title>
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
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </body>
    </html>
  `;

  return new Response(html, {
    status: 404,
    headers: {
      "content-type": "text/html",
    },
  });
};