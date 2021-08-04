
var sql= require('./mysqlconnect');

//Define model which is going to be mapped with each field of Tasks table

var Orderdetails = function(orderdetails){
    this.orderdetailid = orderdetails.orderdetailid;
    this.orderId = orderdetails.orderid;
    this.flowerid = orderdetails.flowerid;
    this.quantity=orderdetails.quantity;
};

Orderdetails.createOrder = function (neworders, result) {    
    sql.query("INSERT INTO Orderdetails values(?,?,?,?)", [neworders.orderdetailid,neworders.orderId,neworders.flowerid,neworders.quantity], function (err, res) {
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

Orderdetails.getOrderById = function (orderId, result) {
    sql.query("Select * from Orderdetails where orderid = ? ", orderId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};


Orderdetails.getAllOrders = function (result) {
    console.log("Invoking dal getall Orders");
    
      sql.query("Select * from Orderdetails", function (err, res) {
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


Orderdetails.updateById = function(id, orderdetails, result){
    sql.query("UPDATE Orderdetails SET quantity = ? WHERE orderid = ?", [orderdetails.quantity, id], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };

  Orderdetails.remove = function(id, result){
    sql.query("DELETE FROM Orderdetails WHERE orderid = ?", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports=Orderdetails;