var sql=require('./mysqlconnect');

var customers=function(customers){
    this.customerid=customers.customerid
    this.firstname=customers.firstname
    this.lastname=customers.lastname
    this.email=customers.email
    this.contactno=customers.contactno
    
};


customers.createCustomers=function(newcustomers,result){
    console.log("New Customers");
    console.log(newcustomers);
    sql.query("Insert into customers values(?,?,?,?,?)",[newcustomers.customerid,newcustomers.firstname,newcustomers.lastname,newcustomers.email,newcustomers.contactno],function(err,res){
        if(err){
            console.log("error: ",err);
            result(err,null);
        }
        else{
            console.log(res.insertid);
            result(null,res.insertid);
        }
    });
};


customers.getCustomersById = function (customersId, result) {
    sql.query("Select * from customers where customerid = ? ",customersId , function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};


customers.getAllcustomers = function (result) {
  console.log("Invoking dal getall Customers");
  
    sql.query("Select * from customers", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('customers : ', res);  
              result(null, res);
            }
        });   
};

customers.updateById = function(customerid, customers, result){

sql.query("UPDATE customers SET lastname = ? WHERE customerid = ?", [customers.lastname, customerid], 
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


customers.remove = function(customersId, result){
sql.query("DELETE FROM customers WHERE customerid = ?", [customersId],
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

module.exports=customers;