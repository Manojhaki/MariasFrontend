// imports
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


// CONSTANTS
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

dotenv.config({ path: './config/config.env' });

// connect to DB
connectDB();

const products = require("./routes/products");
app.use("/products", products);

const server = app.listen(PORT, console.log("Server is running in port: ", PORT));


// Handle undhandled promise rejections - kill app
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    // close server and exit process
    // .exit(1) = exit with a `failure`
    server.close(() => {
        process.exit(1);
    });
});