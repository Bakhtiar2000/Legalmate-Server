console.clear();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const cors = require("cors");
const lawyerRoute = require("./routers/lawyerRoute");
const app = express();


// Application level middleware
app.use(cors());
app.use(morgan("dev"));
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root Route
app.get("/", (req, res) =>
  res.status(200).send(`Hello. <br/> Legal Mate Database Running`)
);

app.use('/lawyer' , lawyerRoute)



// server error handling -> all the errors
app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send(err);
  
    return res.status(err.status || 500).json({
      success: false,
      message: err.message,
      error: err,
    });
  });


module.exports = app;