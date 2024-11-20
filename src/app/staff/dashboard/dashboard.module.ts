import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StaffDashboardRoutingModule } from "./dashboard-routing.module";
import { StaffHomeComponent } from "./home/home.component";
import { StaffInboxComponent } from "./inbox/inbox.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StaffDashboardRoutingModule
  ],
  declarations: [StaffInboxComponent, StaffHomeComponent]
})

export class StaffDashboardModule {}
