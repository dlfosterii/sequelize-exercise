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


//Create a new artist
app.post('/artist', (req, res) => {
    db.Artist.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name, // data
    }).then(response => {
        res.json(response)
    });

});

//Create a new album
app.post('/artist/:id/album', (req, res) => {
    db.Album.create({
        album_name: req.body.album_name,
        year: req.body.year,
        artist_id: req.params.id // data
    }).then(response => {
        res.json(response)
    });
});

//Add a track to an album
app.post('/album/:id/track', (req, res) => {
    db.Track.create({
        track_name: req.body.track_name,
        track_duration: req.body.track_duration,
        album_id: req.params.id // data
    }).then(response => {
        res.json(response)
    });
});

//Get all artists
app.get('/artist', (req, res) => {
    db.Artist.findAll()
        .then((results) => {
            results.forEach((Artist) => {
            })
            res.json(results);
        });

});

//Get all albums by an artist
app.get('/artist/:id/albums', (req, res) => {
    db.Artist.findByPk(req.params.id)
        .then((Artist) => {
            return Artist.getAlbums()
            // results.forEach((Album) => {
            // })
        }).then((results) => {
            res.json(results);            
        });

});



app.listen(PORT, () => {
    console.log(`Listening. Open http://localhost:${PORT} to view.`);
});