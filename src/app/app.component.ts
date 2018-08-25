import { DataBookListService } from './data/data-book-list.service';
import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./static/css/base.css','./static/css/common.css','./static/css/layout.css']
// })

export class AppComponent {
  data:string = 'data1'
  constructor(
    private dataBOokList:DataBookListService
  ){}
  ngOnInit(){
    setTimeout(() => {
      this.data = 'data2'
    }, 2000);
  }

}
