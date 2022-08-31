import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private svc : ServiceService) { }
  completedTodoList = this.svc.completedTodoList


  ngOnInit(): void {
  }

}
