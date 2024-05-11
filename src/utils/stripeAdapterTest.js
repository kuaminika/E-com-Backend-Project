
const StripePaymentAdapter=require("./stripeAdapter");
const spa = new StripePaymentAdapter();
let date = new Date().getTime();

let options = {}
options.name= "something 46 "+date ;
options.description = "somethiung";
options.product = 189562;//product id
options.amount = 1000
options.currency= "cad";
const email = `kuaminika${date}@gmail.com`;
const name = "testkuaminika "+date;
const description = "stripe test "+date;
spa.createCustomer({email,name,description}).then(async (customer)=>{

//console.log
 console.log("customer",customer);
  let item = await spa.createItem(options);
  console.log("item",item);
  let order = await spa.getOrder(options);
  console.log("order",order);
});