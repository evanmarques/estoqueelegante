import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Produto, ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,  // Garante que o componente é standalone
  imports: [IonicModule, CommonModule, FormsModule], // Importa as dependências aqui
})
export class Tab1Page implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe(
      (dados) => {
        this.produtos = dados;
      },
      (erro) => {
        console.error('Erro ao buscar produtos:', erro);
      }
    );
  }
}