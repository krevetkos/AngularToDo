import { Component,  OnInit} from '@angular/core';
import { TodoService } from '../share/todo.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
   loading:boolean = true;
   searchString: string = "";
  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }
  onChange(id:number){
    this.todoService.onTogle(id)
  }
  removeTodo(id:number){
    this.todoService.removeTodo(id)
  }
}
