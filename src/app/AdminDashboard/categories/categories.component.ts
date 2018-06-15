import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Global} from "../../share/service/global";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories_table=[] ;
  catDetails:any={};
  private get_Categories_API = `${Global.API_Call}/admin/getCategory`;
  private CAT_Details_API = `${Global.API_Call}/admin/CategoriesDetails`;
  private API_CAT_Delete = `${Global.API_Call}/admin/CategoriesDelete`;
  private API_CAT_Update = `${Global.API_Call}/admin/UpdateCategories`;
  constructor(
    private http: HttpClient,
    private toaster: ToastsManager,
    private _vcr : ViewContainerRef
  ) {this.toaster.setRootViewContainerRef(_vcr) }

  /* Get categories function */
  get_categories(){
    this.http.get<any>(this.get_Categories_API).subscribe((data)=> {
      console.log(data);
      this.categories_table = data.result;
      console.log(this.categories_table);
    })
  }

  Get_detalis(_id){
    let id={id:_id}
    this.http.post<any>(this.CAT_Details_API,id).subscribe((response)=>{
      console.log(response)
      this.catDetails=response;
      console.log(this.catDetails);
    })
  }

  deleteCat(_id){
    let id = {id:_id}
    console.log(id);

    if(confirm("Are You sure ??")){
      this.http.post<any>(this.API_CAT_Delete,id).subscribe((response)=>{
        this.toaster.success("Detele Categories");
        console.log(response)

      },(error)=>{
        console.log(error);
      })
    }

  }

  updateCat(_id){
    let id = {id:_id};
    console.log(id);
    if(confirm("Are You sure????")){
      this.http.post<any>(this.API_CAT_Update,id).subscribe((response)=>{
        this.toaster.success("Update data")
      },(error)=>{
        console.log(error);
      })
    }

  }

  ngOnInit() {
    this.get_categories();
  }

}
