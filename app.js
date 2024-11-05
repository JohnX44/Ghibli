const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Explicitly set views directory

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index page
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
