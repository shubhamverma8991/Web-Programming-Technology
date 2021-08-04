
var orderController=require("./public/controllers/orderscontroller");
var orderdetailsController=require("./public/controllers/orderdetailscontroller");
var flowerController=require("./public/controllers/flowerscontroller");
var staffController=require("./public/controllers/staffcontroller");
var credentialController=require("./public/controllers/credentialcontroller");
var customerController=require("./public/controllers/customercontroller");


module.exports=function(app){

    app.route("/api/orders")
        .get(orderController.getAll)           
        .post(orderController.insert);           

    app.route("/api/orders/:id")
      .get(orderController.getBy)            
      .put(orderController.update)           
      .delete(orderController.remove);       

      app.route("/api/orderdetails")
        .get(orderdetailsController.getAll)             
        .post(orderdetailsController.insert);           

    app.route("/api/orderdetails/:id")
      .get(orderdetailsController.getBy)           
      .put(orderdetailsController.update)           
      .delete(orderdetailsController.remove);     

      app.route("/api/flowers")              
    .get(flowerController.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(flowerController.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/flowers/:id')
    .get(flowerController.getBy)           //http://localhost:9898/api/flowers/:id    GET
    .put(flowerController.update)          //http://localhost:9898/api/flowers/:id    PUT
    .delete(flowerController.remove);      //http://localhost:9898/api/flowers/:id    DELETE   
    
    

    app.route("/api/staff")              
    .get(staffController.getAll)           
    .post(staffController.insert);         

    app.route('/api/staff/:id')
    .get(staffController.getBy)          
    .put(staffController.update)          
    .delete(staffController.remove);      

    app.route("/api/credential")              
    .get(credentialController.getAll)           
    .post(credentialController.insert);         

    app.route('/api/credential/:id')
    .get(credentialController.getBy)          
    .put(credentialController.update)          
    .delete(credentialController.remove); 



    app.route("/api/customer")              
    .get(customerController.getAll)           
    .post(customerController.insert);         

    app.route('/api/customer/:id')
    .get(customerController.getBy)          
    .put(customerController.update)          
    .delete(customerController.remove); 

};