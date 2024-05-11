
const {STRIPE_PUBLISH_KEY,STRIPE_SECRET_KEY} = process.env;
const key =STRIPE_PUBLISH_KEY|| "pk_test_51PFTVuA5sEbDNpIZq7U2R91Gskr6zrmXua1Cu0A56nR9oiF7jreDwyTMfmsYdmnsmWaIo5BH6gZT0tTCr0mbW1zn002qh0hLuS";
const secretKey = STRIPE_SECRET_KEY ||"sk_test_51PFTVuA5sEbDNpIZJ5xqMENr629XKqIYoStNzUnqbDFtcbkNScQ11E5vSxPBi5RfrCSBMGPrxnGApl1rcSYDxXA200QS4gqh7S";
const stripe = require('stripe')(secretKey);

function StripePaymentAdapter()
{
    console.log("instanciating stripe payment ")


    this.getOrder = async function(options){
        const{item} = options;

        /**
         * 
         * 
            let options = {
            amount: amount * 100,  // amount in the smallest currency unit
            currency: currency,
            receipt: bookingObj['_id'],
            name : bookingObj,
            payment_capture: payment_capture
        };
         * 
         */
        const invoice = await stripe.invoices.create({
            customer: 'cus_Q5ifi2LAedQwAt',
            currency: 'cad',
          });

          return invoice; 
    }

    this.createCustomer = async function(customerDetails)
    {
        let customer = await stripe.customers.create(customerDetails); 
        return customer;
    }

    this.createItem = async function(options)
    {
        
        try{
             let product = await  stripe.products.create({
                name: options.name,
                description: options.description
              });
              
              let price = await   stripe.prices.create({
                  unit_amount: options.amount,
                  currency: options.currency,
                 
                  product: product.id,
                })
                
              console.log(`Success! Here is your ${options.name} product id:${ product.id}`);
              console.log(`Success! Here is your ${options.name} price id: ` + price.id);
              const sre= {product,price};
              return sre;
              
        }
        catch(err)
        {
            console.log("something went wrong while creating the item inside stripe adapter")
            console.error(err);
        }
    }
}


module.exports = StripePaymentAdapter;