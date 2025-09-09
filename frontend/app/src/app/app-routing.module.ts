import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
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