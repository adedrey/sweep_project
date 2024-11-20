import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StaffForgotPasswordComponent } from "./forgot-password.component";

const routes: Routes = [
  {
    path: "",
    component: StaffForgotPasswordComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StaffForgotPasswordRoutingModule { }
