import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Global} from "../../share/service/global";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-disasters',
  templateUrl: './disasters.component.html',
  styleUrls: ['./disasters.component.scss']
})
export class DisastersComponent implements OnInit {
  disaster_table=[];
  disasterFind:any={};
  private Get_disaster_API = `${Global.API_Call}/admin/getDisasters`;
  private API_Disaster_find = `${Global.API_Call}/admin/findDisasters`;
  private API_Update = `${Global.API_Call}/admin/updateDisasters`;
  private API_Delete = `${Global.API_Call}/admin/DeleteDisaster`;
  constructor(

    private http : HttpClient,
    private toaster: ToastsManager,
    private _vcr : ViewContainerRef
  ) {this.toaster.setRootViewContainerRef(_vcr) }

  GET_DISASTER(){
    this.http.get<any>(this.Get_disaster_API)
      .subscribe((data) => {
        console.log(data);
        this.disaster_table = data.result;
        console.log(this.disaster_table);
      });
  }
  FIND_DISASTER(_id){
    let id={id:_id};
    console.log(id);
    // if(confirm("Are You Sure???")){
      this.http.post<any>(this.API_Disaster_find,id).subscribe((data)=>{
        this.toaster.success("Full Details Show");
        this.disasterFind= data.result;
        console.log(this.disasterFind);
      },(error)=>{
        console.log(error)
      })
    // }
  }

  ngOnInit() {
    this.GET_DISASTER();
  }

}
