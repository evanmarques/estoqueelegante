import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
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
    private navCtrl: NavController,
    private alertCtrl: AlertController // Precisamos disto para o pop-up de confirmação
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

  editar(id: number) {
    this.navCtrl.navigateForward(`/admin/produtos/editar/${id}`);
  }

  async excluir(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Exclusão',
      message: 'Você tem certeza que deseja excluir este produto?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          handler: () => {
            this.produtoService.excluir(id).subscribe(() => {
              // Remove o produto da lista local para atualização instantânea da tela
              this.produtos = this.produtos.filter(p => p.id !== id);
            });
          }
        }
      ]
    });
    await alert.present();
  }
}