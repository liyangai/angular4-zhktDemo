import { ApiBookListService } from './../api/api-book-list.service';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})


export class DataBookListService {
  
  constructor(
    private apiBookList:ApiBookListService
  ) { }
 

  getCheckedBooks():Book[]{
    return this.bookList.filter(book=>book.checkd)
  }
  getAllCheckd():boolean{
    return this.getCheckedBooks().length === this.bookList.length && this.bookList.length > 0;
  }

  checkAll(){
    if(this.bookList.length == 0) return;
    const flag = !this.getAllCheckd()
    for(let item of this.bookList){
      item.checkd = flag
    }
  }

  delete(books:Book[]){
    if(!books){
      books = this.getCheckedBooks()
    }
    for(let book of books){
    const index = this.bookList.findIndex(item => item.uuid === book.uuid);
    this.bookList.splice(index,1);
    }
  }

  bookList:Book[] = [];
  getBookList():Promise<Book[]>{
    return new Promise((resolve,reject)=>{
      this.apiBookList.getBookList().then((list)=>{
        resolve(list)
        this.bookList = list;
      }).catch(()=>{
        reject()
      })
    })
  }

  checkOne(book:Book){
    book.checkd = !book.checkd;
    const index = this.bookList.findIndex(item => item.uuid === book.uuid);
    this.bookList.splice(index,1,book)
  }



}
