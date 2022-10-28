const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;

const filmRouter = require("./routes/filmRouter.js");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use('/api/films', filmRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});


