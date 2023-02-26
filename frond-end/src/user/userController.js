var userService = require('./userService');

var getDataConntrollerfn = async (req, res) =>
{
    var nfl = await userService.getDataFromDBService();
    res.send({ "status": true, "data": nfl });
}

var createUserControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Player added successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

var updateUserController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);


    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Player Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "Player Updateeeedddddd Faileddddddd" });
     }
}

var deleteUserController = async (req, res) => 
{
     console.log(req.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Player Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "Player Deleteddd Faileddddddd" });
     }
}
module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController};
