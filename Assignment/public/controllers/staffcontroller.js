var Staff=require('../dal/staffdal');

//HTTP handler for GET, POST, PUT, DELETE    Request Types

exports.getAll = function(req, res) {
    console.log("calling controller function");
    Staff.getAllTask(function(err, staff) {
      if (err)
        res.send(err);
      res.send(staff);
    });
  };

  exports.insert = function(req, res) {
    //Creat object of Task
    var new_task = new Staff(req.body);
  
    //handles null error 
     if(!new_task.staffid || !new_task.firstname){
        res.status(400).send({ error:true, message: 'Please provide task/status' });
      }
     else{
        Staff.createTask(new_task, function(err, staff) {
        if (err)
        res.send(err);
      res.json(staff);
      });
    }
  };

  exports.getBy = function(req, res) {
    Staff.getTaskById(req.params.id, function(err, staff) {
      if (err)
        res.send(err);
      res.json(staff);
    });
  };

  exports.update = function(req, res) {
    Staff.updateById(req.params.id, new Staff(req.body), function(err, staff) {
      if (err)
        res.send(err);
      res.json(staff);
    });
  };
  
  exports.remove = function(req, res) {
    Staff.remove( req.params.id, function(err, staff) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };