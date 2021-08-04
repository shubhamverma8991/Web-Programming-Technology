
var sql= require('./mysqlconnect');

//Define model which is going to be mapped with each field of Tasks table

var Staff = function(staff){
    this.staffid = staff.staffid;
    this.firstname = staff.firstname;
    this.lastname=staff.lastname;
    this.email=staff.email;
    this.contactno=staff.contactno;
    this.role=staff.role;
};

Staff.createTask = function (newStaff, result) {    
    sql.query("INSERT INTO staff values (?,?,?,?,?,?)", [newStaff.staffid,newStaff.firstname,newStaff.lastname,newStaff.email,newStaff.contactno,newStaff.role], function (err, res) {
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

Staff.getTaskById = function ( staffId, result) {
    sql.query("Select * from staff where  staffid = ? ",  staffId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};

Staff.getAllTask = function (result) {
    console.log("Invoking dal getall  staff");
    
      sql.query("Select * from  staff", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('staff : ', res);  
                result(null, res);
              }
          });   
};


Staff.updateById = function( staffid, Staff, result){
    sql.query("UPDATE staff SET role = ? WHERE staffid = ?", [Staff.role,  staffid], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };

  Staff.remove = function( staffid, result){
    sql.query("DELETE FROM  staff WHERE  staffid = ?", [staffid], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports=Staff;