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

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

  getFunraiser(){
    this.http.get<any>(this.Get_Fundraiser_API).subscribe((data)=>{
      console.log(data);
      this.fundraiser_table = data.result;
      console.log(this.fundraiser_table);
    })
  }

  getfunddetails(_id){

    const id={id:_id};
    console.log(_id);
    this.http.post<any>(this.API_FundDetail, id).subscribe((response)=>{
      console.log(response)
      this.detail=response;
      console.log(this.detail);
    },(error)=>{
      console.log(error);
    })
  }

  /* Delete Fundraiser*/
  deleteFundraiser(_id){
    const id = {id:_id};
    this.http.delete<any>(this.API_DeleteFundraiser,_id).subscribe((response)=>{
      console.log(response);
    })
  }

  ngOnInit() {
    this.getFunraiser();
  }

}
