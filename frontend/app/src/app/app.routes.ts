import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  // CORREÇÃO APLICADA AQUI
  {
    path: 'tabs',
    // Apontamos de volta para o 'tabs.module', que é a forma correta para essa parte
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/menu/menu.routes').then( m => m.routes)
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./pages/produto-detalhe/produto-detalhe.page').then( m => m.ProdutoDetalhePage)
  },
];