const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "pk_test_51LYmN6GRVcB5JNrqaOKJMhNBVdnUzszbsILTLffPwqsRIFiEUnHAda7VZBCBPZ9eH5b0YP1F2F02WsZSZPIPp76R00yWppJSAJ"
);

// API
// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API - routes
app.get("/", (req, res) => res.status(200).send("hello sensei"));
app.get("/payments/create", async(req, res) => {
  const total = req.query.total
  
  console.log('Payments received: ',total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:'usd',
  })

//   created
  res.status(201)
});

// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/sensei-clone/us-central1/api
