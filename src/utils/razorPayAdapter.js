
const Razorpay = require("razorpay");
const { PUBLIC_KEY, PRIVATE_KEY, WEBHOOK_SECRET } = process.env;
const razorpayInstance = new Razorpay({
    key_id: PUBLIC_KEY,
    key_secret: PRIVATE_KEY,
});

function PaymentAdapter()
{
    console.log("instanciating razorPay payment ")


    this.getOrder = async function(options){
        console.log("doing get order from razorPay");
        
        const orderObj = await razorpayInstance.orders.create(options);
        return orderObj;
    }
}


module.exports = PaymentAdapter;