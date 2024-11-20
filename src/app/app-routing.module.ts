import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import('./home/home.module').then( m => m.HomeModule) },
  { path: "login", loadChildren: () => import('./auth/staff/login/login.module').then( m => m.StaffLoginModule) },
  { path: "dashboard", loadChildren: () => import("./staff/dashboard/dashboard.module").then( m => m.StaffDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
