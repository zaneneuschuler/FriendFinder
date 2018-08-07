//import friends
var path = require("path");
var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
        console.log("api/friends requested");
    });

    app.get("/api", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/api.html"));
        console.log("/api requested");
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        var friendIndex = 0;
        for (let i = 0; i < friendData.length; i++) {
            debugger;
            if (i === 0) {
                friendIndex = i;
            }
            else{
                if (compare(newFriend, friendData[i]) <  compare(newFriend, friendData[friendIndex])){
                    friendIndex = i;
                }
            }
            
        }
        friendData.push(req.body);
        res.json(friendData[friendIndex]);

    });

}


function compare(newFriend, oldFriend) {
    debugger;
    var diff = 0;
    for (let i = 0; i < oldFriend.length; i++) {
        diff += Math.abs(newFriend[i] - oldFriend[i])


    };
    console.log("Diff: " + diff);
    return diff;

}