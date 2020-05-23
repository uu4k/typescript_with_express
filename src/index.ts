import express from "express";
import { Sequelize, Options } from "sequelize";
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

app.use(express.static("public"));
app.use(expressLayouts);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const env = process.env.NODE_ENV || "development";
import * as databaseConfig from "@/config/database.json";
const sequelize = new Sequelize((databaseConfig as any)[env] as Options);

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello World!" });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
