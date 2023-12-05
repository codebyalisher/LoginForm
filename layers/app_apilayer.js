const express = require('express');
const path = require('path');
const apilayerRouter = require('./apilayer'); // Assuming apilayer.js is in the same directory

const app = express();
const port = 9999;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// Serve static files from the 'layers' folder
app.use(express.static(path.join(__dirname, 'layers')));

// Use the apilayerRouter for routes starting with '/apilayer'
app.use('/apilayer', apilayerRouter);

// Define a route to handle the root path
app.get('/index', (req, res) => {
    // Send the 'index.html' file directly
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/index`);
});
