import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        DialogModule,
        FormsModule,
        HttpClientModule,
        CardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
