package br.com.estoqueelegante.api.produto;

// Usamos um 'record' aqui. É uma forma moderna e concisa no Java para criar
// classes que servem apenas para guardar dados. O record já cria os campos,
// construtor, getters, etc., automaticamente.
public record DadosCadastroProduto(
        String nome,
        String descricao,
        double preco,
        int quantityStock,
        String codigobarras,
    String imageUrl
) {
}