require("dotenv").config;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.js");
const blog = require("./routes/blog.js");
const sql = require("./util/sql.js");

app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/", indexRoutes);

app.get("/", function(req, res) {
console.log("blog");
});

app.get("/blog", function (req, res) {
	res.render("blog", {
		title: req.body.title,
		body: req.body.body,
	});
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
