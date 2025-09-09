

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs', // Redireciona a raiz para a seção de abas
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    // Carrega o MÓDULO que gerencia as abas
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'admin',
    // Carrega as ROTAS da seção de admin
    loadChildren: () => import('./admin/menu/menu.routes').then( m => m.routes)
  }
];