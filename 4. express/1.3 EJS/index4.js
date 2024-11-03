import express from "express";

const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const bandNames = ["Neon Horizon","Velvet Echoes","The Midnight Shift", "Crimson Reverie","Silver Thunder","Eclipse Syndicate", "Atomic Groove", "Obsidian Tide", "Phantom Parade",  "Echo Bloom", "Sonic Mirage","The Wild Chords","Rogue Symphony","Mystic Pulse", "Aurora Drift"];


app.get('/', (req, res) => {
   res.render('index4.ejs')
})

app.post('/submit', (req, res) => {
    var resultNumber = Math.floor(Math.random() * bandNames.length);
    var band = bandNames[resultNumber];
   
    res.render('index4.ejs', { band: band });
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
