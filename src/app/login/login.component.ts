 // import { FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
 import { HttpClient } from '@angular/common/http';

 import { Component, OnInit } from '@angular/core';
 import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
 import {Location} from '@angular/common';
 import {Global} from '../share/service/global';
 import {LoginService} from './service';


 // import {AlertService , AuthService} from '../share/service/ConfigService';



 @Component({
   moduleId : module.id,
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
   // private _session: session;
   // public login = {} ;
   public pwdField = true;
   private previousUrl: string;
   private API_Call = `${Global.API_Call}/admin/adminLogin`;

   constructor(
     public router: Router,
     private http: HttpClient,
     private loginService: LoginService,
     private location: Location) {
     router.events
       .filter(event => event instanceof NavigationEnd)
       .subscribe((e: any) => {
         this.previousUrl = e.url;
       });
   }

   /*set session(value) {
     this._session = value ;
   }
   get session() {
     return this._session;
   }*/

   ngOnInit(): void {
   }

   login() {
     const apiURL = `${this.API_Call}`;
     this.http.post(apiURL).subscribe((data: any) => {
       if (data.status == 'success' && data.statusCode == 200) {
         this.loginService.Islogin.next(true);
         if (history.length > 2) {
           this.location.back();
         }
       }
     }, (err) => {
       alert(err.error.message || err.message);
     });
   }
 }
