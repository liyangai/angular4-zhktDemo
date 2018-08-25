import { Book } from './../model/book';
import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';
const bookList: Book[] = [
  {
      uuid: '1234',
      classify: '0',
      name: '文件夹一',
      extension: '',
      syncstatus: '1',
      time: '2017 12 15',
      checkd: true,
  },
  {
      uuid: '56852',
      classify: '0',
      name: '文件夹二',
      extension: '',
      syncstatus: '2',
      time: '2017 12 15',
      checkd: false,
  },
  {
      uuid: '1242534',
      classify: '1',
      name: 'word文档一',
      extension: 'doc',
      syncstatus: '1',
      time: '2017 12 15',
      checkd: false,
  },
  {
      uuid: '12425774134',
      classify: '1',
      name: 'excele一',
      extension: 'xsl',
      syncstatus: '1',
      time: '2017 12 15',
      checkd: false,
  },
]



@Injectable({
  providedIn: 'root'
})
export class ApiBookListService {

  constructor() { }
  getBookList():Promise<Book[]>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(true){
          resolve(bookList)
        }else{
          // reject();
        }
      }, 1000);
    })
  }
}
