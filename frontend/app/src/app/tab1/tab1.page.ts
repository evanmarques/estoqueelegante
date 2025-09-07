import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // Variável para armazenar a lista de produtos que virá da API
  produtos: Produto[] = [];

  // Injetamos nosso serviço no construtor
  constructor(private produtoService: ProdutoService) {}

  // Este método é executado assim que a página é carregada
  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    // Chamamos o método 'listar' do serviço. O 'subscribe' "ouve" a resposta da API.
    this.produtoService.listar().subscribe(
      (dados) => {
        this.produtos = dados; // Quando os dados chegam, nós os guardamos na nossa variável
      },
      (erro) => {
        console.error('Erro ao buscar produtos:', erro); // Mostra um erro no console caso algo dê errado
      }
    );
  }
}