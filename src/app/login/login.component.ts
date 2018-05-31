 // import { FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
 import {Component , OnInit} from '@angular/core';
 import { HttpClient , HttpHeaders } from '@angular/common/http';
 import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
 import {Location} from '@angular/common';
 import {Global} from '../share/service/global';
 import {LoginService} from './service';
 import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

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

    login: any={

    };


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
        loginapi(){
        this.http.post<any>(this.API_Call, this.login).subscribe((response)=>{

          console.log(response);

          if(response.success){
            this.router.navigate(['']);
          }

        })

          // console.log(this.login);
      }



   ngOnInit(): void {
   }

  
 }
