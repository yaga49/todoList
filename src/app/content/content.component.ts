import {Component, Input, OnInit} from '@angular/core';
import {todoData} from "../models/todoData";
import {data} from "../data/data";



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  toDoData: todoData[] = []
  visible: boolean = false
  count: number = 0
  name: string = ""

  toggle() {

    this.toDoData.push(
      {
        title: this.name,
        complete: false,
        id: this.count
      }
    )
    if (this.name) {

      this.visible = true
    }
    this.count++
  }

  removeList(id: number){
    for(let i = 0; i < this.toDoData.length; i++){
      this.toDoData[i].id = i
    }
    this.toDoData.splice(id,1)
  }
}
