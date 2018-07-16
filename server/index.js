const express = require('express')
const app = express()
const axios = require('axios');

app.use(express.static('dist'));

app.get('/get-news', (req, res) => {
    axios.get('https://www.sicher-im-netz.de/siba-app/siba/list/0')
        .then(response => {
            res.json(response.data);
        })
})

app.listen(3000, () => console.log('Listening on port 3000!'))
