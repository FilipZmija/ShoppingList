const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const lists = [
	{
		title: "Lidl",
		content: ["pomidory", "ogórki", "ziemniaki", "woda", "mięso", "paluszki"],
	},
	{
		title: "Piekarnia",
		content: ["chleb", "bułki", "drożdzówki", "bułka tarta"],
	},
];
const cards = [
	{ number: "45123512", shop: "biedronka" },
	{ number: "62368353", shop: "lidl" },
];

app.use(cors({ orgin: "*" }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.get("/lists", (req, res) => {
	res.send(lists);
	console.log(lists);
});
app.post("/lists/add", (req, res) => {
	lists.push(req.body[0]);
	res.send(lists);
	console.log(lists);
});

app.get("/cards", (req, res) => {
	res.send(cards);
	console.log(cards);
});
app.post("/cards/add", (req, res) => {
	cards.push(req.body[0]);
	res.send(cards);
	console.log(cards);
});
app.post("/lists/delete", (req, res) => {
	lists.splice(req.body[0], 1);
	res.send(lists);
	console.log(lists);
});
app.listen(5000, () => console.log("server started on port 5000"));
