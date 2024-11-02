import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const data = {
        title: 'EJS Practice',
        seconds: new Date().getSeconds(),
        items: ['banana', 'orange', 'apple', 'avocado'],
        htmlContent: '<em>this is em text<em/>'
    };
    
    res.render('index2.ejs', data );
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});