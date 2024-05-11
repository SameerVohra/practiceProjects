import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { User } from "./models/userSchema";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port: number = 3000 || process.env.PORT;

const dbUri: string = process.env.DB_URI as string;

app.use(bodyParser.json());

mongoose
  .connect(dbUri)
  .then(() => console.log("Connected successfully to the database"))
  .catch((error) => console.log(error));

app.use(cors({ origin: "*" }));

app.get("/test", (req, res) => {
  res.send("Testing successful");
});

app.post("/register", async (req, res) => {
  const { username, email, number, password } = req.body;
  try {
    const newUser = new User({
      username: username,
      email: email,
      number: number,
      password: password,
    });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
