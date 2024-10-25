const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors()); // Enable CORS on the server

app.get('/fetch-pdf', async (req, res) => {
  const pdfUrl = 'https://drive.google.com/uc?id=YOUR_PDF_ID&export=download';
  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) throw new Error('Failed to fetch the PDF');
    const data = await response.buffer();
    res.setHeader('Content-Type', 'application/pdf');
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching the PDF');
  }
});

app.listen(5000, () => console.log('Proxy server running on port 5000'));
