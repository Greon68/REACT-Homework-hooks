

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Создаём приложение  
const app = express();  

app.use(cors());

app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Маршрут для главной страницы  
app.get("/", (req, res) => {  
    res.send("Hello, World!");  
});  

app.get("/data", async (req, res) => {
  res.send(JSON.stringify({ status: "ok" }));
});

app.get("/error", async (req, res) => {
  res.status(500).send(JSON.stringify({ status: "Internal Error" }));
});

app.get("/loading", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  res.send(JSON.stringify({ status: "ok" }));
});

// Определяем порт  
const port = process.env.PORT || 7071;

// Запускаем сервер  
app.listen(port, () => {  
    console.log(`Сервер запущен на http://localhost:${port}`);  
});  
