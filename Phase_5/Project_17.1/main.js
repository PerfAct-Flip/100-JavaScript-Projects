const express = require('express');
const PORT = 3000;

const cors = require('cors');
const app = express();

app.use(cors());

app.get('/shorten', async (req, res) => {
  const { url, custom = '', private = '0' } = req.query;
  if (!url) return res.status(400).send('Missing url parameter');

  const apiUrl = new URL('https://ulvis.net/API/write/get');
  apiUrl.searchParams.set('url', url);
  if (custom) apiUrl.searchParams.set('custom', custom);
  apiUrl.searchParams.set('private', private);
  apiUrl.searchParams.set('type', 'json');

  try {
    const response = await fetch(apiUrl.toString());
    const data = await response.json();
    res.json(data);
    console
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log('Proxy server running on port 3000'));
