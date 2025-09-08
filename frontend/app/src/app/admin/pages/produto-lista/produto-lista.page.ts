import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Produto, ProdutoService } from '../../../services/produto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.page.html',
  styleUrls: ['./produto-lista.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ProdutoListaPage implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  ionViewDidEnter() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe({
      next: (dados) => this.produtos = dados,
      error: (erro) => console.error('Erro ao buscar produtos:', erro)
    });
  }

  novoProduto() {
    this.navCtrl.navigateForward('/admin/produtos/novo');
  }
}