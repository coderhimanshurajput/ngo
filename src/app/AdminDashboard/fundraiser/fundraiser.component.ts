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

  private Get_Fundraiser_API = `${Global.API_Call}/admin/addFundraisers`;

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

  ngOnInit() {
  }

}
