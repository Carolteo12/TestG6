// This file will deal with the customer table.
const database = require("./database");  
const express = require("express"); 

var router = express.Router();  

router.get(`/customer/all`, get_all_customer);  
router.get("/customer/by-cid", get_customer_by_id); 
router.post("/customer/add", add_new_customer);  
router.put("/customer/mobile", update_mobile_by_id); 
router.put("/customer/email", update_email_by_id);
router.delete("/customer/del", delete_customer_by_id);

function get_all_customer(request, response) {
  database.connection.query(
    "select * from customer", // query in string format. Need to match name of table in database
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send(results);
      }
    }
  );
}

function get_customer_by_id(request, response) {
  database.connection.query(
    `select * from customer where national_id = ${request.query.national_id}`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send(results);
      }
    }
  );
}

function add_new_customer(request, response) {
  database.connection.query(
    `insert into customer (national_id, first_name, last_name, mobile, email) 
        values (
        '${request.body.national_id}', 
        '${request.body.first_name}',
        '${request.body.last_name}', 
        '${request.body.mobile}', 
        '${request.body.email}')`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Added successfully!");
      }
    }
  );
}

function update_mobile_by_id(request, response) {
  database.connection.query(
    `update customer set mobile = '${request.body.mobile}' where national_id = ${request.body.national_id}`, 
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Updated Successfully!");
      }
    }
  );
}

function update_email_by_id(request, response) {
  database.connection.query(
    `update customer set email = '${request.body.email}' where national_id = ${request.query.national_id}`, 
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Updated Successfully!");
      }
    }
  );
}


function delete_customer_by_id(request, response) {
  database.connection.query(
    `delete from customer where national_id = ${request.query.national_id}`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Deleted Successfully!");
      }
    }
  );
}

module.exports = { 
  router,
};