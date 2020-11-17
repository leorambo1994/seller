import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoNgZorroAntdModule } from "./ng-zorro-antd.module";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { AdminModule } from './admin/admin.module';
import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';


// import { NgModuleCompiler } from "@angular/compiler";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzButtonModule,NzIconModule,
    SlimLoadingBarModule,
    CommonModule,

    AdminModule,
    

    DemoNgZorroAntdModule
    
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
