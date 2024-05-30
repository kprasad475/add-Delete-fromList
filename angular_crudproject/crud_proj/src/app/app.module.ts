import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserComponent } from './component/user/user.component';
import { AddEditUserComponent } from './component/add-edit-user/add-edit-user.component';
import {ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogModule } from '@angular/cdk/dialog'; 
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddEditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,MatInputModule,DialogModule,MatFormFieldModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
