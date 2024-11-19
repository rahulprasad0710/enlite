import express from "express";
import cors from "cors";
import morgan from "morgan";

import AppConfig from "./constants/AppConfig.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = AppConfig.PORT;

app.use(cors());
app.use(morgan("dev"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.
