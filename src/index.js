import express from "express";
import connectDB from "./services/db.js";
import userRoute from "./routes/userRoute.js";
import produtoRoute from "./routes/produtoRoute.js";

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());
app.use("/users", userRoute);
app.use("/produtos", produtoRoute);

app.get("/", (req, res) => {
  res.send("Servidor rodando e conectado ao MongoDB!");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

