package br.com.estoqueelegante.api.produto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.transaction.annotation.Transactional;

@RestController
@RequestMapping("/produtos") // Avisa ao Spring que este controller responde na URL "/produtos"
public class ProdutoController {

    @Autowired // Pede para o Spring injetar (dar uma instância) do nosso repository aqui
    private ProdutoRepository repository;

    @PostMapping // Este método responde a requisições do tipo POST para "/produtos"
    @Transactional // Avisa que este método faz uma transação com o banco de dados
    public void cadastrar(@RequestBody DadosCadastroProduto dados) {
        // O @RequestBody pega o corpo (JSON) da requisição e o converte para o nosso DTO
        repository.save(new Produto(null, dados.nome(), dados.descricao(), dados.preco(), dados.quantidadeEstoque(), dados.barcode(), dados.imageUrl()));
    }

    @GetMapping // Este método responde a requisições do tipo GET para "/produtos"
    public List<Produto> listar() {
        // Chama o método do repository que busca todos os produtos e os retorna
        return repository.findAll();
    }

    @PutMapping("/{id}") // Recebe o ID do produto na URL
    @Transactional
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @RequestBody DadosCadastroProduto dados) {
        // Primeiro, busca o produto no banco pelo ID
        var produto = repository.findById(id).orElse(null);
        if (produto == null) {
            // Se não encontrar, retorna um erro 404 Not Found
            return ResponseEntity.notFound().build();
        }
        // Atualiza os dados do produto com base no que veio na requisição
        produto.setNome(dados.nome());
        produto.setDescricao(dados.descricao());
        produto.setPreco(dados.preco());
        produto.setQuantidadeEstoque(dados.quantidadeEstoque());
        produto.setBarcode(dados.barcode());
        produto.setImageUrl(dados.imageUrl());

        repository.save(produto); // Salva as alterações
        return ResponseEntity.ok(produto);
    }

    @DeleteMapping("/{id}") // Recebe o ID do produto na URL
    @Transactional
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            // Se o produto não existir, retorna 404 Not Found
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        // Retorna 204 No Content, indicando sucesso na exclusão sem corpo de resposta
        return ResponseEntity.noContent().build();
    }
}