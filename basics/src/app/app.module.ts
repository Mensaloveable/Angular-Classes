/* import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */

/*Just likeannotation in Java
The NgModule decorator is to annotate this class as a module*/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; 

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}