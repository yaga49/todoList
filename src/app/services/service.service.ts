import {Injectable, Output} from '@angular/core';
import {todoData} from "../models/todoData";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  toDoData: todoData[] = []
  completedTodoList: todoData[] = []
  count: number = 0

  removeList(id: number){
    for(let i = 0; i < this.toDoData.length; i++){
      this.toDoData[i].id = i
    }
    this.toDoData.splice(id,1)
  }

  completedList(id: number){
    for(let i = 0; i < this.toDoData.length; i++){
      this.toDoData[i].id = i
    }
    this.completedTodoList.push(this.toDoData[id])
    this.removeList(id)
  }
  toggle(title: string) {

    this.toDoData.push(
      {
        title: title,
        complete: false,
        id: this.count
      }
    )

    this.count++
  }
  constructor() { }

}
