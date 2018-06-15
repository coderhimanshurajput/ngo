import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Global} from "../../share/service/global";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


 private API_CALL = `${Global.API_Call}/users/getusers`;
 private API_User_Details = `${Global.API_Call}/users/UserDetails`;

  usertabledata =[];
  userD:any={};
  constructor(
    private http: HttpClient
  ) { }

  /* get user data in Table*/
    tabledata(){
      this.http.get<any>(this.API_CALL).subscribe((data)=>{
        console.log(data);
        this.usertabledata = data.result;
        console.log(this.usertabledata);
      })

    }
    UserDetails(_id){
      const id={id:_id};
      console.log(id);
      this.http.post<any>(this.API_User_Details,id).subscribe((response)=>{
        this.userD=response;
      },(error)=>{
        console.log(error)
      })
    }

  ngOnInit() {

    this.tabledata();

  }

}
