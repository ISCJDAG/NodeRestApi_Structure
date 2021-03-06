const Customer = require("../models/customer.model.js");

//create and save a new Customer
exports.create = (req,res)=>{
    //validate Request
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty"
        });
    }

    //create a Customer
     const customer = new Customer({
         email: req.body.email,
         name: req.body.name,
         active: req.body.active
     });

     //save Customer in the database
     Customer.create(customer,(err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating a Customer."
            });
        }

        else res.send(data);
     });
};


//find All
exports.findAll = (req, res)=>{

    Customer.getAll((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message || "Some error occurred while retriving customers."
            });
        }else res.send(data);
    });
};

//find a single Customer with a customerId
exports.findOne = (req, res)=>{
    Customer.findById(req.params.customerId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.customerId
            });
          }
        } else res.send(data);
      });
};

//update a customer indentified
exports.update = (req,res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
}

//Delete a Customer with Id
exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.customerId
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

//delete all customers
exports.deleteAll = (req,res) =>{
    Customer.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all customers."
          });
        else res.send({ message: `All Customers were deleted successfully!` });
      });
};

