import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {HttpClient} from '@angular/common/http';
import {Global} from '../../share/service/global';

// import {ɵa} from '@angular/http';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  private previousUrl: string;
  categories: any = {};

  /* add category API */
  private Category_Api = `${Global.API_Call}/admin/addCategories`;

  constructor(
     public router: Router,
     private http: HttpClient,
  ) {}

  /* Add category Function */
  add_category(){
    this.http.post<any>(this.Category_Api , this.categories) .subscribe((response)=> {
      if(response.success === true){
        this.router.navigate(['/catergories']);
      }
    })
  }

     /* Get category in the table  Function */


  ngOnInit() {
  }

}
