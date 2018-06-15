import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Global} from "../../share/service/global";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-privacyandpolicy',
  templateUrl: './privacyandpolicy.component.html',
  styleUrls: ['./privacyandpolicy.component.scss']
})
export class PrivacyandpolicyComponent implements OnInit {
  GetPrivacy:any={};
   API_PandC = `${Global.API_Call}/admin/privacyandpolicy`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toaster: ToastsManager,
    private _vcr : ViewContainerRef
  ) { this.toaster.setRootViewContainerRef(_vcr)}

  /* Create Privacy And police method*/

  privacy(){

    this.http.post<any>(this.API_PandC,this.GetPrivacy).subscribe((response)=>{
      this.toaster.success("Thank You !!!! Privacy and Police is created ")
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
