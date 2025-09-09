// ARQUIVO: frontend/app/src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Carrega o MÓDULO de rotas das abas
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'admin',
    // Carrega as ROTAS do menu admin (que é standalone)
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