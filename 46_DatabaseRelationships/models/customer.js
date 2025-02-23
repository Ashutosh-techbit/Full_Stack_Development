const mongoose = require("mongoose")
const {Schema} = mongoose;

main().then(console.log("connected successfully")).catch(err=>console.log(err));

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
    
}

//one to many

const orderSchema = new Schema({
    item:String,
    price:Number,
})

const customerSchema = new Schema({
    name:String,
    
    
    orders:[{
        type:Schema.Types.ObjectId , //go to populate in mongoose docs for more information
        ref:"Order",
    }],
})

const Order = mongoose.model("Order",orderSchema)
const Customer = mongoose.model("Customer",customerSchema)

//in this orders are related to Orders
const addcustomer = async()=>{
    let cust1 = new Customer({
        name:"adam",
    });

    let order1 = await Order.findOne({item : "Chips"});
    let order2 = await Order.findOne({item : "Chocolate"});

    cust1.orders.push(order1)
    cust1.orders.push(order2)
        
    let result =  await cust1.save()
    console.log(result);
}

addcustomer();

//=============NOTE: In this onetomany relation of customer and orders the objectid is store by mongodb , to get whole object use .populate("orders")===================


// const addOrders = async()=>{
//     let res = await Order.insertMany([
//         {item:"Chips",price:10},
//         {item:"Chocolate",price:20},
//         {item:"Samosa",price:15},
//     ])
//     console.log(res);
// }
// addOrders();