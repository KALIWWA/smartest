import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApartmentComponent} from "./apartment/apartment.component";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    NavbarComponent,
    FooterComponent,
    ApartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {provide: ApartmentDataService}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
