import { Component, OnInit } from '@angular/core';
import {Global} from "../../share/service/global";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-fundraiser',
  templateUrl: './add-fundraiser.component.html',
  styleUrls: ['./add-fundraiser.component.scss']
})
export class AddFundraiserComponent implements OnInit {
  Fundraiser:any ={};
  private Fundraiser_API = `${Global.API_Call}/admin/addFundraisers`;
  constructor(
    private router:Router,
    private http: HttpClient
  ) { }

  AddFundraiser(){
    this.http.post<any>(this.Fundraiser_API,this.Fundraiser).subscribe((response)=>{
      console.log(response);

      if(response.success === true){
        this.router.navigate(['fundraiser']);
      }
    });
  }

  ngOnInit() {
  }

}
