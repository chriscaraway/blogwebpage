require("dotenv").config;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.js");
const Blog = require("./routes/blog.js");
const sql = require("./util/sql.js");

app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/", indexRoutes);

app.get("/", function(req, res) {
renderBlog(res);
app.get("/form", function (req, res) {
res.render("form", {
	title: req.body.title,
	body: req.body.body,
});
});
});

app.post("/", function(req, res) {
if (req.body.title === "") {
	res.redirect("Error");
	return;
}
else if (req.body.body === "") {
	res.redirect("Error");
	return;
}

Blog.add([req.body.title, req.body.body])
.then(function() {
	renderBoard(res, "Saved" + req.body.title);
});

app.get("/form", function (req, res) {
res.render("form", {
	title: req.body.title,
	body: req.body.body,
});
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
});
