var Orderdetails=require('../dal/orderdetailsdal');

//HTTP handler for GET, POST, PUT, DELETE    Request Types

exports.getAll = function(req, res) {
    console.log("calling controller function");
    Orderdetails.getAllOrders(function(err,orders ) {
      if (err)
        res.send(err);
      res.send(orders);
    });
  };

  exports.insert = function(req, res) {
    //Creat object of Task
    var new_orderdetails = new Orderdetails(req.body);
  console.log(new_orderdetails);
    //handles null error 
     if(!new_orderdetails.orderId || !new_orderdetails.flowerid){
        res.status(400).send({ error:true, message: 'Please provide flowerid/orderid' });
      }
     else{
      Orderdetails.createOrder(new_orderdetails, function(err, orders) {
        if (err)
        res.send(err);
      res.json(orders);
      });
    }
  };

  exports.getBy = function(req, res) {
    Orderdetails.getOrderById(req.params.id, function(err, orders) {
      if (err)
        res.send(err);
      res.json(orders);
    });
  };

  exports.update = function(req, res) {
    Orderdetails.updateById(req.params.id, new Orderdetails(req.body), function(err, orders) {
      if (err)
        res.send(err);
      res.json(orders);
    });
  };
  
  exports.remove = function(req, res) {
    Orderdetails.remove( req.params.id, function(err, orders) {
      if (err)
        res.send(err);
      res.json({ message: 'Orderdetails successfully deleted' });
    });
  };