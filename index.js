const express = require('express');
const _ = require('lodash');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Vulnerable App', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
