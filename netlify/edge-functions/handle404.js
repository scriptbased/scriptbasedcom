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
        .back-button {
          margin-top: 1em;
          padding: 0.5em 1em;
          font-size: 1em;
          color: #081E3D;
          background-color: #ffffff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
        }
        .back-button:hover {
          background-color: #f0f0f0;
        }
        .logo {
          width: 150px;
          margin-bottom: 1em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="/public/controlup_apps_for_dark_background.png" alt="ControlUp Logo" class="logo" />
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/" class="back-button">Back to Home</a>
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