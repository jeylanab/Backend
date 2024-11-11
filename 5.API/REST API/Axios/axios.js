import axios from 'axios';

const options = {
  method: 'GET',
    url: 'https://zoopla.p.rapidapi.com/properties/v2/list',
  
  params: {
    locationValue: 'Oxford, Oxfordshire',
    locationIdentifier: 'oxford',
    furnishedState: 'Any',
    sortOrder: 'newest_listings',
    page: '1'
  },
  headers: {
    'x-rapidapi-key': '206f5fabb5mshd6a12f5f0fefd42p122a88jsn651b1c6c0620',
    'x-rapidapi-host': 'zoopla.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});