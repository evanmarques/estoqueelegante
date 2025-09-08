import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ProdutoService } from '../../../services/produto.service';

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
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  salvar() {
    // Agora o método .cadastrar() é encontrado corretamente
    this.produtoService.cadastrar(this.produto).subscribe({
      // Adicionamos os tipos: 'response' é do tipo 'any' e 'error' também
      next: (response: any) => {
        console.log('Produto cadastrado com sucesso!', response);
        this.navCtrl.back();
      },
      error: (error: any) => {
        console.error('Erro ao cadastrar produto', error);
      }
    });
  }
}