import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Global} from "../../share/service/global";
@Component({
  selector: 'app-disasters',
  templateUrl: './disasters.component.html',
  styleUrls: ['./disasters.component.scss']
})
export class DisastersComponent implements OnInit {
  disaster_table=[];
  private Get_disaster_API = `${Global.API_Call}/admin/getDisasters`;

  constructor(
    private http : HttpClient
  ) { }

  GET_DISASTER(){
    this.http.get<any>(this.Get_disaster_API)
      .subscribe((data) => {
        console.log(data);
        this.disaster_table = data.result;
        console.log(this.disaster_table);
      });
  }

  ngOnInit() {
    this.GET_DISASTER();
  }

}
