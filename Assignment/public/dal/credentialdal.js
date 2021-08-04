
var sql= require('./mysqlconnect');

//Define model which is going to be mapped with each field of Tasks table

var Credential = function(credential){
  this.id = credential.id;
  this.userId = credential.userid;
  this.username = credential.username;
  this.password=credential.password;
};

Credential.createcredentials = function (credential, result) { 
  console.log(credential);   
  sql.query("INSERT INTO credentials values(?,?,?,?)", [credential.id,credential.userId,credential.username,credential.password], function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res.insertId);
              result(null, res.insertId);
            }
        });           
};

Credential.getOrderById = function (Id, result) {
    sql.query("Select * from Credentials where id = ? ", Id, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};


Credential.getAllOrders = function (result) {
    console.log("Invoking dal getall Orders");
    
      sql.query("Select * from Credentials", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('tasks : ', res);  
                result(null, res);
              }
          });   
};


Credential.updateById = function(id, Credential, result){
    sql.query("UPDATE Credentials SET userid = ? WHERE id = ?", [Credential.userId, id], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };

  Credential.remove = function(id, result){
    sql.query("DELETE FROM Credentials WHERE id = ?", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports=Credential;