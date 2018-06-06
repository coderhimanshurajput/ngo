import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Global} from "../../share/service/global";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-disaster',
  templateUrl: './add-disaster.component.html',
  styleUrls: ['./add-disaster.component.scss']
})
export class AddDisasterComponent implements OnInit {
  private Add_disaster_Api = `${Global.API_Call}/admin/addDisasters`;
  disaster:any = {};

  constructor(
    private http : HttpClient,
    private router: Router
  ) { }

  add_Disaster(){
    this.http.post<any>(this.Add_disaster_Api,this.disaster).subscribe((response)=> {
      console.log(response);
      this.disaster={};
      if(response.success === true) {
        this.router.navigate(['/disasters']);
      }
    })
  }

  ngOnInit() {
  }

}
