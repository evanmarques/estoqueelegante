// ARQUIVO NOVO: frontend/app/src/app/model/produto.ts

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantityStock: number;
  codigobarras: string;
  imagem?: string; // O '?' torna o campo opcional
}