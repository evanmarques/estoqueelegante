import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'produtos',
      loadComponent: () => import('../pages/produto-lista/produto-lista.page').then( m => m.ProdutoListaPage)
    },
    {
      path: 'produtos/novo',
      loadComponent: () => import('../pages/produto-cadastro/produto-cadastro.page').then( m => m.ProdutoCadastroPage)
    },
    {
       path: 'produtos/editar/:id',
       loadComponent: () => import('../pages/produto-editar/produto-editar.page').then( m => m.ProdutoEditarPage)
    },
    {
      path: '',
      redirectTo: 'produtos', // Se o usuário digitar apenas /admin, será levado para /admin/produtos
      pathMatch: 'full'
    }
];