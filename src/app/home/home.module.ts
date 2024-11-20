import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home-routing.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    RouterModule,
  ],
  declarations: [HomeComponent]
})

export class HomeModule {}
