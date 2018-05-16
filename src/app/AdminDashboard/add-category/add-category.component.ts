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
  private API_Call = `${Global.API_Call}/admin/addCategories`;

  constructor(
     public router: Router,
     private http: HttpClient,
  ) {
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((e: any) => {
        this.previousUrl = e.url ;
      });
  }

  ngOnInit() {
  }
  category() {
    const apiURL = `${this.API_Call}`;
    this.http.post(apiURL).subscribe((data: any) => {
      if (data.status === 'sucess' && data.statusCode === 200 ) {
          alert('Data save');
      }
    }, (err) => {
      alert(err.error.message);
    });
  }


}
