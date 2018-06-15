import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {HttpClient} from '@angular/common/http';
import {Global} from '../../share/service/global';
import {ToastsManager} from "ng2-toastr";
import {FormBuilder , Validators} from "@angular/forms";

// import {ɵa} from '@angular/http';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  forms;
  private previousUrl: string;
  categories: any = {};

  /* add category API */
  private Category_Api = `${Global.API_Call}/admin/addCategories`;

  constructor(
     private fb:FormBuilder,
     public router: Router,
     private http: HttpClient,
     private toaster: ToastsManager,
     private _vcr : ViewContainerRef
  ) {
    /* Toater Message create new object*/
    this.toaster.setRootViewContainerRef(_vcr)

    /* Create a form validation */
    this.forms = fb.group( {
      categories_name:['',Validators.required],
      categories_img:['', Validators.required],
      categories_description:['', Validators.required]
    });
  }

  /* Add category Function */
  add_category(){
    this.http.post<any>(this.Category_Api , this.categories) .subscribe((response)=> {
      if(response.success === true){

        this.router.navigate(['/catergories']);
        this.toaster.success("Catergories successfully add");
      }
    })
  }

     /* Get category in the table  Function */


  ngOnInit() {
  }

}
