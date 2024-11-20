import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StaffDashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: StaffDashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "home", // Redirect to the "home" path
        pathMatch: "full", // Ensures exact match for the empty path
      },
      {
        path: "home",
        loadChildren: () => import('./home/home.module').then(m => m.StaffHomeModule)
      },
      {
        path: "inbox",
        loadChildren: () => import('./inbox/inbox.module').then(m => m.StaffInboxModule)
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StaffDashboardRoutingModule { }
