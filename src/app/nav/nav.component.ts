import { Component, OnInit ,OnChanges,ChangeDetectionStrategy, SimpleChange, SimpleChanges, Input} from '@angular/core';
import { DataBookListService } from '../data/data-book-list.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../static/css/base.css','../static/css/common.css','../static/css/layout.css']
})
export class NavComponent    {
  @Input() 
  data:string

  name1:string = 'name1'
  name2:string = 'name2'
  constructor(
    private dataBookList:DataBookListService
  ) { }
  checkAll(){
    this.dataBookList.checkAll()
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('onChange fired');
    console.log(changes);
    this.name2 = this.name2 + changes.data.currentValue
  }
  ngOnInit() {
    console.log('2222');
    
    setTimeout(() => {
    }, 3000);
  }
  

}
