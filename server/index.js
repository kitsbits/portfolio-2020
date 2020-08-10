const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const publicPath = '/';
const outputPath = path.resolve(process.cwd(), 'dist');
const port = 3300;

app.use(compression());
app.use(publicPath, express.static(outputPath));

app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));

app.listen(port, null, async (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`Server started on port: ${port}`);
  }
});
