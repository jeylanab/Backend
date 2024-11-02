import express from "express";
import ejs from "ejs";


const app = express();
const port = 3000;
var today =new Date().getDay();
var message = ''

if (today == 0 || today == 6) {
    message = "Today is the weekend enjoy your time";
}
else {
    message = "Today is the workday enjoy your time";
}

app.get('/', (req, res) => {
    res.render('index.ejs', {
        day: message
    });
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})