require("dotenv").config();
const express = require("express");
const { sequelize } = require("./src/config/db");
const movies_routes = require("./src/routes/movies_routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", movies_routes);

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected");

    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("error while connecting to pg sql:", err);
    process.exit(1);
  }
})();
