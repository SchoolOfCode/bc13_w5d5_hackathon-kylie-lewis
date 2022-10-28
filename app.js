const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
