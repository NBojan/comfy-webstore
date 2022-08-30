require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);

exports.handler = async function(event, context){
    if(event.body){
        const {shipping, total_amount} = JSON.parse(event.body);
        const calculateOrderAmount = () => shipping + total_amount;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(),
            currency: "usd"
        })
        .catch(err => {
            return {
                statusCode: 500,
                body: JSON.stringify({msg: err.message})
            }
        })

        return {
            statusCode: 200,
            body: JSON.stringify({clientSecret:paymentIntent.client_secret})
        }
    }
    return {
        statusCode: 200,
        body: "create payment intent",
    }
}