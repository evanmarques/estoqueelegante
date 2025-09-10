package br.com.estoqueelegante.api.produto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Combina @Getter, @Setter, @EqualsAndHashCode, @ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity // Mapeia esta classe para uma entidade JPA
@Table(name = "products") // Mapeia para a tabela "products"
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // O campo em Java se chama "nome", mas no banco a coluna será "name"
    @Column(name = "name")
    private String nome;

    @Column(name = "description")
    private String descricao;

    @Column(name = "price")
    private double preco;

    // O campo em Java é "quantidadeEstoque", mas a coluna será "stock_quantity"
    @Column(name = "stock_quantity")
    private int quantidadeEstoque;

    @Column(name = "bar_code", unique = true)
    private String barcode;

    @Column(name = "image_url")
    private String imageUrl;
}
