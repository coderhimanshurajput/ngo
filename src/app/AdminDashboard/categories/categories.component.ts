import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Global} from "../../share/service/global";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories_table=[] ;
  private get_Categories_API = `${Global.API_Call}/admin/getCategory`;

  constructor(
    private http: HttpClient
  ) { }

  /* Get categories function */
  get_categories(){
    this.http.get<any>(this.get_Categories_API).subscribe((data)=> {
      console.log(data);
      this.categories_table = data.result;
      console.log(this.categories_table);
    })
  }

  ngOnInit() {
    this.get_categories();
  }

}
