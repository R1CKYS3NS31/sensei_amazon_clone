const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LYmN6GRVcB5JNrqSu0VL2DYm4SoHEYhhvknDbEU284XphbvenlwnEX95AvWKkfhZocw6uggtQi29HKoADte6yVU00ORECr3TM"
);

// API
// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API - routes
app.get("/", (req, res) => res.status(200).send("hello sensei"));
app.post("/payments/create", async (req, res) =>{
  const { total } = await req.body;

  //   const total = req.query.total;
  console.log("Payments received: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log({ clientSecret: paymentIntent.client_secret });

  //   created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/sensei-clone/us-central1/api
