import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({  
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  list: any;
  page: number = 0;
  itemsPerPage: number;
  totalItems: number;
  constructor(public _http: HttpClient) {}
  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this._http
      .get('https://app.gopalette.co/project-list')
      .subscribe((response: any) => {
        this.list = response.data.data;
        this.totalItems = response.data.total;
      });
  }
  gty(page: any) {
    this._http
      .get(`https://app.gopalette.co/project-list?&page=${this.page}`)
      .subscribe((data: any) => {
        this.list = data.data.data;
        this.page = page;
        console.log(this.page);
        console.log(this.list);
      });
  }
}
