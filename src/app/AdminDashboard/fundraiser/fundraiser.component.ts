import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Global} from "../../share/service/global";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {ToastsManager} from "ng2-toastr";


@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.scss']
})



export class FundraiserComponent implements OnInit {
  fundraiser_table =[];
  detail: any={};
  values = [];


  private Get_Fundraiser_API = `${Global.API_Call}/admin/GetFundraisers`;
  private API_FundDetail=`${Global.API_Call}/admin/Find_fundraiser`;
  private API_DeleteFundraiser =  `${Global.API_Call}/admin/Delete_Fundraiser`;
  private Update_API = `${Global.API_Call}/admin/Update_Fundraiser`;

  constructor(
    private http: HttpClient,
    private router : Router,
    private route : ActivatedRoute,
    private toster: ToastsManager,
    private _vcr: ViewContainerRef
  ) { this.toster.setRootViewContainerRef(_vcr) }

  getFunraiser(){
    this.http.get<any>(this.Get_Fundraiser_API).subscribe((data)=>{
      this.fundraiser_table = data.result;
    })
  }

  getfunddetails(_id){
    const id={id:_id};
    this.http.post<any>(this.API_FundDetail, id).subscribe((response)=>{
      this.detail=response;
    },(error)=>{
      console.log(error);
    })
  }

  /* Delete Fundraiser*/
  deleteFundraiser(_id){
    const id = {id:_id};
    if(confirm(`<html> Are You Sure Data delete </html>`)){
      this.http.post<any>(this.API_DeleteFundraiser,id).subscribe((response)=>{
        this.toster.success("Thank you !! Data is Deleted Successfully")
        console.log(response);
      },(error)=>{
        console.log(error);
      })
    }

  }

  UpdateFundriser(_id){
     const id = {id:_id};
      console.log(id);
      this.http.post<any>(this.Update_API,id).subscribe((response)=>{
        if(response.success === true){
          this.router.navigate(['/fundraiser']);
          this.toster.success("Thank you !! Data is Update Successfully")
          this.values= response.result;
          this.router.navigateByUrl('/fundraiser');
        }
      },(error)=> {
        console.log(error);
      })
  }

  ngOnInit() {
    this.getFunraiser();
  }

  reloadPage(){

  }


}
