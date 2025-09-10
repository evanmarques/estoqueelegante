import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { ProdutoService } from '../../../services/produto.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.page.html',
  styleUrls: ['./produto-cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutoCadastroPage implements OnInit {

  produto = {
    nome: '',
    descricao: '',
    preco: null,
    quantidadeEstoque: null,
    barcode: ''
  };

  constructor(
    private produtoService: ProdutoService,
    private navCtrl: NavController,
    private toastCtrl: ToastController // ADIÇÃO: Injetar o ToastController
  ) { }

  ngOnInit() {
  }

  salvar() {
    this.produtoService.cadastrar(this.produto).subscribe({
      next: (response: any) => {
        // ALTERAÇÃO: Chamar a função de Toast antes de voltar
        this.exibirToast('Produto cadastrado com sucesso!', 'success');
        this.navCtrl.back();
      },
      error: (error: any) => {
        console.error('Erro ao cadastrar produto', error);
        this.exibirToast('Erro ao cadastrar produto.', 'danger');
      }
    });
  }

  // ADIÇÃO: Função para criar e exibir a mensagem
  async exibirToast(mensagem: string, cor: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000, // 2 segundos
      color: cor,
      position: 'top'
    });
    await toast.present();
  }

  async tirarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl, //Retorna em base64
      source: CameraSource.Prompt //Deixa o usuário escolher entre Câmerae Galeria
    });

    if (image.dataUrl) {
      //Aqui você faria o upload e obteria a URL
      //this.produto.imageUrl = await this.produtoService.uploadImage(...);
    }
  }

}