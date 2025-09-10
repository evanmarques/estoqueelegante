import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service'; // O caminho pode variar
import { Produto } from '../../../model/produto'; // O caminho pode variar

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.page.html',
  styleUrls: ['./produto-editar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutoEditarPage implements OnInit {
  produto: Produto | any = {};

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    // Pega o 'id' que foi passado na URL da rota
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Usa o serviço para buscar os dados do produto e preencher o formulário
      this.produtoService.buscarPorId(Number(id)).subscribe(data => {
        this.produto = data;
      });
    }
  }

  salvar() {
    // Envia o produto inteiro para o método de atualizar do serviço
    this.produtoService.atualizar(this.produto.id, this.produto).subscribe(() => {
      this.navCtrl.back(); // Volta para a página anterior (a lista)
    });
  }
}