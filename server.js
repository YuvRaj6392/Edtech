const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require("./routes/tutorials.route")(app);
require("./routes/users.route")(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Edtech Project.",
  });
});



const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
