//import friends
var path = require("path");
var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
        console.log("api/friends requested");
    });

    app.get("/api", function (req, res) {
        res.redirect("/api/friends");
        console.log("/api requested");
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        var friendIndex = 0;
        for (let i = 0; i < friendData.length; i++) {
            debugger;
            let currentFriendArray = friendData[i].scores;
            if (i === 0) {
                friendIndex = i;
            }
            else{
                if (compare(newFriend.scores, currentFriendArray) <  compare(newFriend.scores, friendData[friendIndex].scores)){
                    friendIndex = i;
                }
            }
            
        }
        friendData.push(newFriend);
        res.send(friendData[friendIndex]);

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