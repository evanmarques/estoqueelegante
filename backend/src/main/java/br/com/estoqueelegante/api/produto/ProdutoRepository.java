package br.com.estoqueelegante.api.produto;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Product, Long> {

}