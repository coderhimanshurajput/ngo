 import {Component , OnInit , ViewContainerRef} from '@angular/core';
 import { HttpClient , HttpHeaders } from '@angular/common/http';
 import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
 import {Global} from '../share/service/global';
 import {CookieService} from "ngx-cookie-service";
 import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
 import {ToastsManager} from "ng2-toastr";

 @Component({
   moduleId : module.id,
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})

 export class LoginComponent implements OnInit {
   private API_Call = `${Global.API_Call}/admin/ADMINlogin`;
    login: any={};

   constructor(
     public router: Router,
     private http: HttpClient,
     private cookies: CookieService,
     private toaster: ToastsManager,
     private _vcr: ViewContainerRef
     ) { this.toaster.setRootViewContainerRef(_vcr)}

        loginapi(){
        this.http.post<any>(this.API_Call, this.login).subscribe((response)=>{
         /* console.log(response.success);
          console.log(response.user.token);*/
          if(response.success === true){
            this.router.navigate(['/dashboard']);
            this.toaster.success("Thank You!! You are login Successfully ");
            this.cookies.set("token", response.user.token, 1/48)
          }
        })
      }
      test1(){
        this.toaster.success("Thank You!! You are login Successfully ");
      }
   ngOnInit(): void {
   }
 }
