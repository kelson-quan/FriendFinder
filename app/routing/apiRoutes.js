var datafriends = require("../data/friends");
var datacharacters = require("../data/characters")

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/app/characters", function(req,res){
        res.json(datacharacters);
    });
    
    app.get("/app/friends", function(req,res){
        res.json(datafriends);
    });
  };
