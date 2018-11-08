const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// 1. Create an Express server. It can run on any port you wish, though the typical ones are port 3000 or port 80.
app. listen(port, () => console.log('Example public_html listening on port ' + port + '!'));

// 2. Create five HTML documents. These can have anything on them you wish.
// 3. Create five GET routes in Express, one per HTML document, that render the HTML documents.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html/index.html'));
});
app.get('/home', (req, res) => {
    // res.send('This is the Home page');
    res.sendFile(path.join(__dirname, 'public_html/index.html'));
});
app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html/account.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html/about.html'));
});
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html/cart.html'));
});
app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html/search.html'));
});

// 4. Create two static file directories that serve various static files (can be images, PDFs, etc).
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'pdf')));
app.get('/img', (req, res) => {
    res.download(path.join(__dirname, 'img/peter.png'), 'peter_parker.png');
});
app.get('/pdf', (req, res) => {
    res.download(path.join(__dirname, 'pdf/trolls_just_want_to_have_fun.pdf'), 'trolls_research.pdf');
});
// 5. Add some static files to the two directories in step 4.

// 6. Create another static file directory but map it to a different logical path
app.use('/files', express.static(path.join(__dirname, 'saved')));
// 7. Add some static files to the directory in step 6.

// 8. Create a GET route that redirects to some other location
app.get('/login', (req, res) => {
    res.redirect(301, '/account');
});

// 9. Create two EJS templates (they can be named anything) that accept two properties from an Express route each
// 10. Create two GET routes, one for each EJS template, that renders the templates and passes a JSON object with two properties into them