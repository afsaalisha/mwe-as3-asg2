import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tip1',
    loadChildren: () => import('./tip1/tip1.module').then( m => m.Tip1PageModule)
  },
  {
    path: 'tip2',
    loadChildren: () => import('./tip2/tip2.module').then( m => m.Tip2PageModule)
  },
  {
    path: 'tip3',
    loadChildren: () => import('./tip3/tip3.module').then( m => m.Tip3PageModule)
  },
  {
    path: 'view-details',
    loadChildren: () => import('./view-details/view-details.module').then( m => m.ViewDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
