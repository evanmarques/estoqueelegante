package br.com.estoqueelegante.api.produto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
        repository.save(new Produto(null, dados.nome(), dados.descricao(), dados.preco(), dados.quantidadeEstoque(), dados.barcode()));
    }

    @GetMapping // Este método responde a requisições do tipo GET para "/produtos"
    public List<Produto> listar() {
        // Chama o método do repository que busca todos os produtos e os retorna
        return repository.findAll();
    }
}