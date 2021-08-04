var Orders=require('../dal/ordersdal');

//HTTP handler for GET, POST, PUT, DELETE    Request Types

exports.getAll = function(req, res) {
    console.log("calling controller function");
    Orders.getAllOrders(function(err,orders ) {
      if (err)
        res.send(err);
      res.send(orders);
    });
  };

  exports.insert = function(req, res) {
    //Creat object of Task
    var new_orders = new Orders(req.body);
  
    //handles null error 
     if(!new_orders.orderid || !new_orders.customerid){
        res.status(400).send({ error:true, message: 'Please provide Cus id/orderid'});
      }
     else{
        Orders.createOrder(new_orders, function(err, orders) {
        if (err)
        res.send(err);
      res.json(orders);
      });
    }
  };

  exports.getBy = function(req, res) {
    Orders.getOrderById(req.params.id, function(err, orders) {
      if (err)
        res.send(err);
      res.json(orders);
    });
  };

  exports.update = function(req, res) {
    Orders.updateById(req.params.id, new Orders(req.body), function(err, orders) {
      if (err)
        res.send(err);
      res.json(orders);
    });
  };
  
  exports.remove = function(req, res) {
    Orders.remove( req.params.id, function(err, orders) {
      if (err)
        res.send(err);
      res.json({ message: 'Order successfully deleted' });
    });
  };