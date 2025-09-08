import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoEditarPage } from './produto-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoEditarPageRoutingModule {}
