import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

// code to create custom middleware
const logger = (req, res, next) => {
   console.log(`request method: ` +  req.method)
    console.log(`request url: ` + req.url)
    next();
}

// use the custom url
app.use(logger);


app.get('/', (req, res) => {
  res.send('hello')
})
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})