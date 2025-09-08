import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Rota raiz carrega a vitrine (Tabs)
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // CORREÇÃO APLICADA AQUI
  {
    path: 'admin',
    // Trocamos 'loadChildren' por 'loadComponent' para carregar a página standalone do menu
    loadComponent: () => import('./admin/menu/menu.page').then( m => m.MenuPage)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}