const cors = require("cors");

module.exports = cors({
  origin: ["https://web-barber-phi.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});
