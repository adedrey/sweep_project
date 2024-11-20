import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StaffLoginRoutingModule } from "./login-routing.module";
import { StaffLoginComponent } from "./login.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StaffLoginRoutingModule
  ],
  declarations: [StaffLoginComponent]
})

export class StaffLoginModule {}
