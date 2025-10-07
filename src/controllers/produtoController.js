import Produto from "../models/Produto.js";

export const getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
};

export const getProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      res.status(404).json({ message: "Produto não encontrado" });
      return;
    }
    res.json(produto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar produto" });
  }
};

export const createProduto = async (req, res) => {
  try {
    const { nome, tipo, descricao, quantidade } = req.body;

    if (!nome || !tipo || !descricao || quantidade === undefined) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const produto = new Produto({ nome, tipo, descricao, quantidade });
    await produto.save();

    res.status(201).json(produto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar produto" });
  }
};

export const updateProduto = async (req, res) => {
  try {
    const { nome, tipo, descricao, quantidade } = req.body;

    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      { nome, tipo, descricao, quantidade },
      { new: true }
    );

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    
    res.status(200).json({
      message: "Produto atualizado com sucesso!",
      produto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar produto" });
  }
};


export const deleteProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) {
      res.status(404).json({ message: "Produto não encontrado" });
      return;
    }
    res.json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar produto" });
  }
};
