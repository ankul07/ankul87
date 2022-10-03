const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://username:<password>@cluster0.xtyv4.mongodb.net/ankulportfolio?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("successful connected");
}).catch((err)=>{
    console.log("not connection");
})

// mongoose.connect("mongodb://localhost:27017/ankulportfolio",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
//     console.log("successful connected");
// }).catch((err)=>{
//     console.log("not connection");
// })
