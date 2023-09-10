import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "featuremodule1",
    loadComponent: () => import("./featuremodule1/featuremodule1.component").then(c => c.Featuremodule1Component)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
