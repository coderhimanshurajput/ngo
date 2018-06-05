import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {HttpClientModule , HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LockComponent } from './lock/lock.component';
import { HeaderComponent } from './share/header/header.component';
import { SideMenuComponent } from './share/side-menu/side-menu.component';
import { FooterComponent } from './share/footer/footer.component';
import { PagenotfoundComponent } from './share/pagenotfound/pagenotfound.component';
import { HomeComponent } from './AdminDashboard/home/home.component';
import { ProfileComponent } from './share/profile/profile.component';
import { CategoriesComponent } from './AdminDashboard/categories/categories.component';
import { DisastersComponent } from './AdminDashboard/disasters/disasters.component';
import { FundraiserComponent } from './AdminDashboard/fundraiser/fundraiser.component';
import { UserComponent } from './AdminDashboard/user/user.component';
import { PaymentComponent } from './AdminDashboard/payment/payment.component';
import { PaymentKeyComponent } from './AdminDashboard/payment-key/payment-key.component';
import { TermandconditionComponent } from './AdminDashboard/termandcondition/termandcondition.component';
import { PrivacyandpolicyComponent } from './AdminDashboard/privacyandpolicy/privacyandpolicy.component';
import { AddCategoryComponent } from './AdminDashboard/add-category/add-category.component';
import { AddDisasterComponent } from './AdminDashboard/add-disaster/add-disaster.component';
import { AddFundraiserComponent } from './AdminDashboard/add-fundraiser/add-fundraiser.component';
import { FormsModule } from '@angular/forms';
// import { AuthInterceptor ,ABC } from "../config";
import {FormControl, Validators} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    LockComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    PagenotfoundComponent,
    HomeComponent,
    ProfileComponent,
    CategoriesComponent,
    DisastersComponent,
    FundraiserComponent,
    UserComponent,
    PaymentComponent,
    PaymentKeyComponent,
    TermandconditionComponent,
    PrivacyandpolicyComponent,
    AddCategoryComponent,
    AddDisasterComponent,
    AddFundraiserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
   /* {provide: HTTP_INTERCEPTORS, useClass: ABC, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},*/
    CookieService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
