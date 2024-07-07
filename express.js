const express = require("express");
const port = 3001;
const app = express();

var i=0
app.use(express.json());

app.get("/home", (req, res) => {
    
    console.log("API get called",++i)
  res.json(`Welcome to home ${i}`);
});


app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

