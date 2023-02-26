var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        userModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.Player_Name = userDetails.Player_Name;
        userModelData.Team = userDetails.Team;
        userModelData.Rushing_Yards= userDetails.Rushing_Yards;
        userModelData.Touchdowns_thrown= userDetails.Touchdowns_thrown;
        userModelData.Sacks= userDetails.Sacks;
        userModelData.Field_goal = userDetails.Field_goal;
        userModelData.Catches= userDetails.Catches;

        userModelData.save(function resultHandle(error, _result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (_id,userDetails) => {     
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(_id,userDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }

 module.exports.removeUserDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndRemove(req.params.id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }
