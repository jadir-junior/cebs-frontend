import { RouterModule, Routes } from '@angular/router'

import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
