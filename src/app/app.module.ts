import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule } from 'devextreme-angular';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
