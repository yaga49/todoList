import {Component, Input} from '@angular/core';
import {todoData} from "./models/todoData";
import {data} from "./data/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'NgToDo';

}
