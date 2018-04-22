import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class TodoService {
 todoList: AngularFireList<any>;
  constructor(private firebaseDb:AngularFireDatabase) { }

  getTodoList(){
    this.todoList=this.firebaseDb.list('titles');
    return this.todoList;
  }

  
  addTitle(title:string){
this.todoList.push({
  title:title,
  isChecked:false
});
  }

  ceheckUncheckTitle($key:string,flag:boolean){
    this.todoList.update($key,{isChecked:flag});
   }


}
