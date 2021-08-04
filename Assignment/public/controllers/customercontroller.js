var customers=require('../dal/customerdal');

//HTTP handler for GET, POST, PUT, DELETE    Request Types

exports.getAll = function(req, res) {
    console.log("calling controller function");
    customers.getAllcustomers(function(err, customers) {
      if (err)
        res.send(err);
      res.send(customers);
    });
  };

  exports.insert = function(req, res) {
    //Creat object of Orders
    var new_customers = new customers(req.body);
  
    //handles null error 
     if(!new_customers.customerid || !new_customers.firstname){
        res.status(400).send({ error:true, message: 'Please provide customers/status' });
      }
     else{
      customers.createCustomers(new_customers, function(err,customers) {
        if (err)
        res.send(err);
      res.json(customers);
      });
    }
  };

  exports.getBy = function(req, res) {
    customers.getCustomersById(req.params.id, function(err, customers) {
      if (err)
        res.send(err);
      res.json(customers);
    });
  };

  exports.update = function(req, res) {
      customers.updateById(req.params.id, new customers(req.body), function(err, customers) {
      if (err)
        res.send(err);
      res.json(customers);
    });
  };
  
  exports.remove = function(req, res) {
    customers.remove( req.params.id, function(err, customers) {
      if (err)
        res.send(err);
      res.json({ message: 'Customers successfully deleted' });
    });
  };