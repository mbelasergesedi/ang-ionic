import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'votrecode',
    loadChildren: () => import('./votrecode/votrecode.module').then(m => m.VotreCodeModule)
  },
  {
    path: 'medicaments',
    loadChildren: () => import('./medicaments/medicaments.module').then(m => m.MedicamentsModule)
  },
  {
    path: 'cartographie',
    loadChildren: () => import('./cartographie/cartographie.module').then(m => m.CartographieModule)
  },
  {
    path: 'simple',
    loadChildren: () => import('./search-simple/search-simple.module').then(m => m.SearchSimpleModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'complexe',
    loadChildren: () => import('./search-complexe/search-complexe.module').then(m => m.SearchComplexeModule)
  },
  {
    path: 'professionel',
    loadChildren: () => import('./professionel/professionel.module').then(m => m.ProfessionelModule)
  },
  {
    path: 'interactions',
    loadChildren: () => import('./interactions/interactions.module').then(m => m.InteractionsModule)
  },

  {
    path: 'inscription',
    loadChildren: () => import('./forminscrit/forminscrit.module').then(m => m.FormInscritModule)
  },

  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
