var friendsList = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsList);
	});

	app.post("/api/friends", function(req, res) {

	    friendsList.push(req.body);
	    var diffArray = [];
		var currentUser = friendsList[friendsList.length-1].scores;

		for (var i=0;i<friendsList.length-1;i++){
			differences(currentUser,friendsList[i].scores);	
		}

		function differences(a1,a2){
			var differences = 0;
			for (var i=0;i<10;i++){
				if (parseInt(a1[i]) != parseInt(a2[i])){
					var diff = parseInt(a1[i]) - parseInt(a2[i]);
					if (diff < 0){
						diff = diff*(-1);
					}
					differences += diff;
				}
			}
			diffArray.push(differences);
		};

		var lowest = Math.min.apply(null, diffArray);
		for (var i=0;i<diffArray.length;i++){
			if (lowest == diffArray[i]){
				var match = friendsList[i];
			}
		}

		res.json(match);

	});
};



