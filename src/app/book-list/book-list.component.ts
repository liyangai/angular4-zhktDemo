
import { DataBookListService } from './../data/data-book-list.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['../static/css/base.css','../static/css/common.css','../static/css/layout.css',]
})
export class BookListComponent implements OnInit {
  constructor(
    private dataBookList:DataBookListService,
    private el :ElementRef
  ) { }

  ngOnInit() {
    this.dataBookList.getBookList()
  }
  reNameId:string = '-1'
  reNameModel:string = '';
  reName(book:Book){
    this.reNameId = book.uuid;
    this.reNameModel = book.name;
    const inputId = '#ngInput'+book.uuid;
    setTimeout(() => {
      const input = this.el.nativeElement.querySelector(inputId);
      input.select()
    }, 0);
  }
  pressReName(event:any){
    if(event.keyCode === 13){
      event.target.blur()
    }
  }
  submitRename(book:Book){
    console.log('reanme   '+this.reNameModel);
    this.reNameId = '-1'
    
  }

  checkOne(book:Book){
    this.dataBookList.checkOne(book);
  }

  getSyncText(syncstatus:string):string{
    if(syncstatus === '1'){
      return '云端'
    }else{
      return '本地'
    }
  }
}
