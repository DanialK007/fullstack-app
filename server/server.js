const express = require('express');
const cors = require('cors');
const app = express();

// Use the CORS middleware
app.use(cors());

app.get("/api", (req, res) => {
    res.json({"users" : ["UserOne", "UserTwo", "UserThree", "UserFour", "UserFive","UserSix", "UserSeven", "UserEight", "UserNine", "UserTen"]});
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
