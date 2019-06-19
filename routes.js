const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_W96BCUYoPTdmVHIuvlwqjnHX00Aq2xH2i6");
router.use(bodyParser.text());

router.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;
