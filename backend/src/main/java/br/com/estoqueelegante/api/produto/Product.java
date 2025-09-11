package br.com.estoqueelegante.api.produto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "products")
@Entity(name = "Product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;

    @Column(name = "stock_quantity")
    private Integer stockQuantity;

    @Column(name = "bar_code")
    
    private String barCode;
    private String imageURL;

    public Product(ProductRegistrationData data) {
        this.name = data.name();
        this.description = data.description();
        this.price = data.price();
        this.stockQuantity = data.stockQuantity();
        this.barCode = data.barCode();
        this.imageURL = data.imageURL();
    }
}
