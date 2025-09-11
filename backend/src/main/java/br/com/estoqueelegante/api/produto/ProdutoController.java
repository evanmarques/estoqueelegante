// ARQUIVO: backend/src/main/java/br/com/estoqueelegante/api/produto/ProdutoController.java

package br.com.estoqueelegante.api.produto;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("products")
@CrossOrigin(origins = "*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    private static String UPLOAD_DIR = "uploads/";

    @PostMapping
    @Transactional
    public void cadastrar(@RequestPart("dados") ProductRegistrationData dados,
                          @RequestPart(value = "imagem", required = false) MultipartFile imagem) throws IOException {
        Product produto = new Product(dados);
        if (imagem != null && !imagem.isEmpty()) {
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            String nomeArquivo = UUID.randomUUID().toString() + "_" + imagem.getOriginalFilename();
            Path caminhoArquivo = uploadPath.resolve(nomeArquivo);
            Files.write(caminhoArquivo, imagem.getBytes());
            produto.setImageURL(nomeArquivo);
        }
        repository.save(produto);
    }

    @GetMapping
    public List<Product> listar() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<Product> atualizar(@PathVariable Long id, @RequestBody Product dadosProduto) {
        return repository.findById(id)
                .map(produtoExistente -> {
                    produtoExistente.setName(dadosProduto.getName());
                    produtoExistente.setDescription(dadosProduto.getDescription());
                    produtoExistente.setPrice(dadosProduto.getPrice());
                    produtoExistente.setStockQuantity(dadosProduto.getStockQuantity());
                    // CORREÇÃO DA DIGITAÇÃO AQUI
                    produtoExistente.setBarCode(dadosProduto.getBarCode());
                    return ResponseEntity.ok(repository.save(produtoExistente));
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}