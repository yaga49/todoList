import {Component, Input, OnInit} from '@angular/core';
import {todoData} from "../models/todoData";
import {ServiceService} from "../services/service.service";





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private svc : ServiceService) {

  }
  todoList = this.svc.toDoData
  completedTodoList = this.svc.completedTodoList
  name: string = ""

  ngOnInit(): void {
  }





  clickAdd() {
    this.svc.toggle(this.name)
  }
  deleteList(id: number){
    this.svc.removeList(id)
  }
  completedList(id: number){
    this.svc.completedList(id)
  }
}
