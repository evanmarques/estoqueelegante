import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Rota raiz continua sendo a vitrine (Tabs)
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // CORREÇÃO APLICADA AQUI
  {
    path: 'admin',
    // Agora carregamos o ARQUIVO DE ROTAS do menu, não o componente diretamente.
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