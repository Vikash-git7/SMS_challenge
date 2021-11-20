import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  constructor(private http:HttpService) { }
  items;
  data:[];

  ngOnInit() {
    this.http.getData('http://localhost:4000/getAllDetails').subscribe(
      (json)=>{
      this.data=json.datas
      this.items=json.datas
      })
  }

  filterByDate(){
    let sdate = (<HTMLInputElement> document.getElementById('startD')).value;
    let edate =  (<HTMLInputElement> document.getElementById('endD')).value;
    console.log(sdate,edate);
    let Sdate= new Date(sdate);
    let Edate= new Date(edate);
    this.items = this.items.filter(d => {var time = new Date(d.start_date).getTime();
      return (Sdate.getTime() < time && time < Edate.getTime());
     });
  }

  reset(){
    this.items=this.data;
  }

 

}
