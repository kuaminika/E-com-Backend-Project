

const dotenv = require("dotenv");
dotenv.config();
const PAYMENTFILE =process.env.PAYMENTFILE ;
console.log("PAYMENTFILE",PAYMENTFILE );

function NotFoundPaymentAdapter()
{
    console.log("instanciating not found payment ")


    this.getOrder = function(options){
        console.log("doing get order from not found",options);
    }
}


if(PAYMENTFILE)
{


    const actual= require (`./${PAYMENTFILE}`);
    module.exports = actual;

}
else
{ 
    module.exports = NotFoundPaymentAdapter;

}