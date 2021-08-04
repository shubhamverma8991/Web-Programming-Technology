
var sql= require('./mysqlconnect');

//Define model which is going to be mapped with each field of Tasks table

var Orders = function(orders){
    this.orderid = orders.orderid;
    this.orderdate = orders.orderdate;
    this.customerid = orders.customerid;
    this.amount=orders.amount;
};

Orders.createOrder = function (neworders, result) {  
  console.log(neworders);  
    sql.query("INSERT INTO orders values(?,?,?,?)",[neworders.orderid,neworders.orderdate,neworders.customerid,neworders.amount], function (err, res) {
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

Orders.getOrderById = function (orderId, result) {
    sql.query("Select * from orders where orderid = ? ", orderId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};


Orders.getAllOrders = function (result) {
    console.log("Invoking dal getall Orders");
    
      sql.query("Select * from Orders", function (err, res) {
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


Orders.updateById = function(orderid, Orders, result){
    sql.query("UPDATE Orders SET customerid = ? WHERE orderid = ?", [Orders.customerid, orderid], 
        function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };

  Orders.remove = function(orderid, result){
    sql.query("DELETE FROM Orders WHERE orderid = ?", [orderid], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports=Orders;