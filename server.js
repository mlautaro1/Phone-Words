const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const { numbersToText } = require('./process_string');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/submitInput', (req, res) => {
    const r = numbersToText(req.body.data);
    res.locals.result = r;
    res.status(200).json({
        message: 'ok',
        result: r,
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})