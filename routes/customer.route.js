module.exports = app => {
    const customers = require("../controllers/customer.controller.js");

    //create a new Customer
    app.post("/customers",customers.create);
    
    //Retrive all Customers
    app.get("/customers",customers.findAll);
    
    //Retrive a single Customer with customerId
    app.get("/customers/:customerId",customers.findOne);

    //Update a Customer with customerId
    app.put("/customers/:customerId",customers.update);

     // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // deleteAll
  app.delete("/customers", customers.deleteAll)
}