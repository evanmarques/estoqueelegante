import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importe o ToastController aqui
import { IonicModule, NavController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../model/produto';
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
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController // << CORREÇÃO APLICADA AQUI
  ) { }

  ngOnInit() {
    // O ngOnInit é ótimo para o primeiro carregamento
    // this.carregarProdutos(); // Removido para evitar carregamento duplicado
  }

  ionViewDidEnter() {
    // Usamos o ionViewDidEnter para garantir que a lista seja
    // atualizada toda vez que o usuário voltar para esta tela
    this.carregarProdutos();
  }

  async carregarProdutos() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando produtos...',
      spinner: 'crescent'
    });
    await loading.present();

    this.produtoService.listar().subscribe({
      next: (dados) => {
        this.produtos = dados;
        loading.dismiss();
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos:', erro);
        loading.dismiss();
      }
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
              this.produtos = this.produtos.filter(p => p.id !== id);
              // Agora a função de toast será encontrada corretamente
              this.exibirToast('Produto excluído com sucesso!', 'success');
            });
          }
        }
      ]
    });
    await alert.present();
  }

  // Esta função agora funcionará pois this.toastCtrl existe
  async exibirToast(mensagem: string, cor: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      color: cor,
      position: 'top'
    });
    await toast.present();
  }
}