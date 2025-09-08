import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs', // Redireciona a rota raiz para a vitrine
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // CORREÇÃO APLICADA AQUI
  {
    path: 'admin',
    // Carrega o COMPONENTE do Menu...
    loadComponent: () => import('./admin/menu/menu.page').then( m => m.MenuPage),
    // ...e TAMBÉM carrega as ROTAS FILHAS que serão exibidas dentro do Menu.
    loadChildren: () => import('./admin/menu/menu.routes').then( m => m.routes)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}