import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './AdminDashboard/home/home.component';
import {CategoriesComponent} from './AdminDashboard/categories/categories.component';
import {DisastersComponent} from './AdminDashboard/disasters/disasters.component';
import {PagenotfoundComponent} from './share/pagenotfound/pagenotfound.component';
import {FundraiserComponent} from './AdminDashboard/fundraiser/fundraiser.component';
import {PaymentComponent} from './AdminDashboard/payment/payment.component';
import {UserComponent} from './AdminDashboard/user/user.component';
import {PaymentKeyComponent} from './AdminDashboard/payment-key/payment-key.component';
import {TermandconditionComponent} from './AdminDashboard/termandcondition/termandcondition.component';
import {PrivacyandpolicyComponent} from './AdminDashboard/privacyandpolicy/privacyandpolicy.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {LockComponent} from './lock/lock.component';
import {AddCategoryComponent} from './AdminDashboard/add-category/add-category.component';
import {AddDisasterComponent} from './AdminDashboard/add-disaster/add-disaster.component';
import {AddFundraiserComponent} from './AdminDashboard/add-fundraiser/add-fundraiser.component';




const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component : HomeComponent},
  {path: 'catergories', component : CategoriesComponent},
  {path: 'disasters', component: DisastersComponent},
  {path: 'fundraiser', component: FundraiserComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'user', component: UserComponent},
  {path: 'payment-key', component: PaymentKeyComponent},
  {path: 'termandcondition', component: TermandconditionComponent},
  {path: 'privacyandpolicy', component: PrivacyandpolicyComponent},
  {path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'lock', component: LockComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'add-disasters', component: AddDisasterComponent},
  {path: 'add-fundraiser', component: AddFundraiserComponent},
  {path: '**', component: PagenotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
