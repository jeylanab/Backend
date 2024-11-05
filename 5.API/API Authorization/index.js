import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "joe";
const yourPassword = "909730";
const yourAPIKey = "f5b3fbbf-a471-464f-aa3a-c76d9f7f41b0";
const yourBearerToken = "0ca3295c-c91f-4eeb-9c35-bb7542d53ca9";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random")
    res.render("index.ejs", { content: JSON.stringify(response.data)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
 
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", {content : JSON.stringify(response.data)})
  } catch (error) {
   console.error("failed to load error message", error.message)
  }
   
  
});

app.get("/apiKey", async (req, res) => { 
  try {
    const result = await axios.get( API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    }); 
    res.render('index.ejs', {content: JSON.stringify(result.data)})
  } catch (error) {
    console.error("error here", error.message)
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/secret/2`, {   
      headers: { 
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });

    res.render('index.ejs', { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send("Failed to fetch data");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
