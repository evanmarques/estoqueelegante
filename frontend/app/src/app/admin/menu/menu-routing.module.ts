import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'produtos',
        // CORREÇÃO AQUI: Usando 'loadComponent'
        loadComponent: () => import('../pages/produto-lista/produto-lista.page').then( m => m.ProdutoListaPage)
      },
      {
        path: 'produtos/novo',
        // CORREÇÃO AQUI: Usando 'loadComponent'
        loadComponent: () => import('../pages/produto-cadastro/produto-cadastro.page').then( m => m.ProdutoCadastroPage)
      },
      {
        path: '',
        redirectTo: 'produtos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}