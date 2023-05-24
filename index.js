const express = require('express')
const movies = require("./routes/movies")
const apiKeys = require("./routes/apiKeys")
const cors = require("cors") 

const app = express()
const port = 3009

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());


app.use("/apikeys", apiKeys.router);

app.use((req, res, next) =>{
 apiKeys.authenticApiKey(req, res, next);
});

app.get("/", (req, res) => {
  res.send("Hello my name is Bond, James!");
});

app.use("/movies", movies);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})