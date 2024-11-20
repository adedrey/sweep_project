import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StaffInboxComponent } from "./inbox.component";

const routes: Routes = [
  { path: "",  component: StaffInboxComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StaffInboxRoutingModule {}
