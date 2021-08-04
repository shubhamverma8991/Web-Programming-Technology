var Credentials=require('../dal/credentialdal');

//HTTP handler for GET, POST, PUT, DELETE    Request Types

exports.getAll = function(req, res) {
    console.log("calling controller function");
    Credentials.getAllOrders(function(err,credentials ) {
      if (err)
        res.send(err);
      res.send(credentials);
    });
  };

  exports.insert = function(req, res) {
    //Creat object of Task
   
    var new_credentials = new Credentials(req.body);
  
    //handles null error 
     if(!new_credentials.id || !new_credentials.username){
        res.status(400).send({ error:true, message: 'Please provide Id/orderid' });
      }
     else{
      Credentials.createcredentials(new_credentials, function(err, credentials) {
        if (err)
        res.send(err);
      res.json(credentials);
      });
    }
  };

  exports.getBy = function(req, res) {
    Credentials.getOrderById(req.params.id, function(err, credentials) {
      if (err)
        res.send(err);
      res.json(credentials);
    });
  };

  exports.update = function(req, res) {
    Credentials.updateById(req.params.id, new Credentials(req.body), function(err, credentials) {
      if (err)
        res.send(err);
      res.json(credentials);
    });
  };
  
  exports.remove = function(req, res) {
    Credentials.remove( req.params.id, function(err, credentials) {
      if (err)
        res.send(err);
      res.json({ message: 'Order successfully deleted' });
    });
  };