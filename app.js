const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const hbs = require("hbs");
const path = require('path');


require("./models/database/database");
require("./models/schemas/schemas");
const routes = require("./routes/routes")



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(routes)
const static_path = path.join(__dirname,"./public");
app.set("view engine","hbs");
app.use(express.static(static_path));

const partial_path = path.join(__dirname,"./partialsfiles")
hbs.registerPartials(partial_path);



app.listen(PORT,()=>{
    console.log(`we are listeining the port number is ${PORT}`);
})