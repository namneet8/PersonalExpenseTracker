const mongoose = require("mongoose");

const DB ='mongodb+srv://nam123:Nam123CENTENNIAL@cluster0.f7fjcjd.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})