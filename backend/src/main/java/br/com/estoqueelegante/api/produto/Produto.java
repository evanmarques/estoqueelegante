// ARQUIVO: backend/src/main/java/br/com/estoqueelegante/api/produto/Produto.java

package br.com.estoqueelegante.api.produto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter; // <-- IMPORTE O GETTER
import lombok.NoArgsConstructor;
import lombok.Setter; // <-- IMPORTE O SETTER

@Table(name = "products")
@Entity(name = "Produto")
@Getter // <-- ADICIONE ESTA ANOTAÇÃO
@Setter // <-- ADICIONE ESTA ANOTAÇÃO
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    private double preco;
    private int quantityStock;
    private String codigobarras;
    private String imagem;

    public Produto(DadosCadastroProduto dados) {
        this.nome = dados.nome();
        this.descricao = dados.descricao();
        this.preco = dados.preco();
        this.quantityStock = dados.quantityStock();
        this.codigobarras = dados.codigobarras();
    }
}