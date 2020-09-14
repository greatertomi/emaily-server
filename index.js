const express = require('express');
const app = express();

app.get('/', (res, req) => {
  res.setEncoding({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
