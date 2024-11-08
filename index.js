let express = require("express");
let app = new express();
app.set("view engine","ejs")     
app.use(express.static("public"));                                                                

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.cj4qaum4045j.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "adminadmin",
  database:"paradise-concerts",
  port: 3306,
 },
});

// Route for home page
app.get("/", (req, res) => {
    knex
      .select()
      .from("doughnuts")
      .then((result) => {
        res.render("index", { doughnuts: result });
      })
      .catch((err) => {
        console.error("Error fetching doughnuts data:", err);
        res.status(500).send("Error fetching doughnuts data");
      });
  });
  
app.listen(3000);
