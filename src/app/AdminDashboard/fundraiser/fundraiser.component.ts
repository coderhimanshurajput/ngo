import { Component, OnInit } from '@angular/core';
import {Global} from "../../share/service/global";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.scss']
})



export class FundraiserComponent implements OnInit {
  fundraiser_table =[];
  detail: any={};

  private Get_Fundraiser_API = `${Global.API_Call}/admin/GetFundraisers`;
  private API_FundDetail=`${Global.API_Call}/admin/Find_fundraiser`;
  private API_DeleteFundraiser =  `${Global.API_Call}/admin/Delete_Fundraiser`;
  private Update_API = `${Global.API_Call}/admin/Update_Fundraiser`;

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

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
    this.http.post<any>(this.API_DeleteFundraiser,id).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }

  UpdateFundriser(_id){
     const id = {id:_id};
      console.log(id);
      this.http.post<any>(this.Update_API,_id).subscribe((response)=>{
        console.log(response);
      },(error)=> {
        console.log(error);
      })
  }

  ngOnInit() {
    this.getFunraiser();
  }

}
