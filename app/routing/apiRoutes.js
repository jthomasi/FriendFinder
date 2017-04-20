var friendsList = require("../data/friends");

console.log(friendsList);

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsList);
		console.log(friendsList);
	});

	// app.post("/api/friends", function(req, res) {
	//     friendsList.push(req.body);
	// });

};

