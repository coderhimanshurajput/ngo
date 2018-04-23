 // import { FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
 import { HttpClient } from '@angular/common/http';

 import { Component, OnInit } from '@angular/core';
 import {Router, ActivatedRoute} from '@angular/router';
 import {AlertService , AuthenticationService} from '../share/service/ConfigService';


 @Component({
   moduleId : module.id,
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
   constructor() {
   }

   ngOnInit(): void {}
 }
