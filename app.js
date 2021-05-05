var express = require("express");
var app = express();

app.get("/greetings/VenturX", (req, res, next) => {
    res.json(["Hello"]);
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});