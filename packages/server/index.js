import express from 'express';
import { App } from '@saumitra/web'
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
		return res.send(
			` <!DOCTYPE html>
      <head>
        <title>SSR React</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="root">${ReactDOMServer.renderToString(<App />)}</div>
      </body>
    </html>`
		);	
});

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
