const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.post('/artist', (req, res) => {
    db.Artist.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name, // data
    }).then(response => {
        res.json(response)
    });

});

app.post('/artist/:id/album', (req, res) => {
    db.Album.create({
        album_name: req.body.album_name,
        year: req.body.year,
        artist_id: req.params.id // data
    }).then(response => {
        res.json(response)
    });
});

app.post('/album/:id/track', (req, res) => {
    db.Track.create({
        track_name: req.body.track_name,
        track_duration: req.body.track_duration,
        album_id: req.params.id // data
    }).then(response => {
        res.json(response)
    });
});





app.listen(PORT, () => {
    console.log(`Listening. Open http://localhost:${PORT} to view.`);
});