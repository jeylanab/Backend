import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Test Postmon </h1>')
})

// post request
app.post('/about', (req, res) => {
    res.sendStatus(200);
})

app.delete('/name', (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
  console.log("your app is running on port " + port)
}
)