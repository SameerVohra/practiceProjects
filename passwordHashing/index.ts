import express, { Express } from "express";
import HashPass from "./HashPass";
const app: Express = express();

const port: Number = 3000;
app.use(express.json());
app.get("/test", async (req, res) => {
  res.send("Testing Successful");
});

app.post("/hashPass", (req, res) => {
  const { password, times } = req.body;
  try {
    const pass: string = password;
    let salt: number = times;
    const hashedPass = HashPass(pass, pass.length - salt);
    console.log(`hashedPass: ${hashedPass}`);
    res.status(201).send(hashedPass);
  } catch (error) {
    res.status(501).send("Internal Server Error");
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
