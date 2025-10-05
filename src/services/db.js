import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://gabrielo:gabrielo@clusterestoqueempresa.p6sjfve.mongodb.net/?retryWrites=true&w=majority&appName=ClusterEstoqueEmpresa";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
