import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StaffLoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: "",
    component: StaffLoginComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StaffLoginRoutingModule { }
