const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success!",
  });
});
app.post("/payment/create", async (req, res) => {
  const total = parseFloat(req.query.total); 

  if (!total || total <= 0) {
    return res.status(403).json({
      message: "Total must be greater than 0",
    });
  }

  // Convert dollars to cents
  const totalInCents = Math.round(total * 100);

  if (totalInCents < 50) {
    return res.status(400).json({
      message: "Amount must be at least $0.50 USD",
    });
  }

  try {
    // Create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalInCents, // Use total in cents
      currency: "usd",
    });

    // Send back the client secret to the client for Stripe.js
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    // Handle errors from Stripe API
    logger.error("Stripe error:", error);
    res.status(500).json({
      message: "An error occurred while processing the payment",
      error: error.message,
    });
  }
});

exports.api = onRequest(app);