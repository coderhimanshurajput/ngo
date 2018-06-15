import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Global} from "../../share/service/global";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ToastsManager} from "ng2-toastr";

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
    private http: HttpClient,
    private toaster: ToastsManager,
    private _vcr: ViewContainerRef
  ) {this.toaster.setRootViewContainerRef(_vcr) }

  AddFundraiser(){
    this.http.post<any>(this.Fundraiser_API,this.Fundraiser).subscribe((response)=>{
      console.log(response);

      if(response.success === true){
        this.toaster.success("Your Data is successfully saved");
        this.router.navigate(['/fundraiser']);

      }
    });
  }

  ngOnInit() {
  }

}
