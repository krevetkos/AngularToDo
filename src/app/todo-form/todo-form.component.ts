import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from '../share/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title:string = "";
  constructor(private todoSrvice:TodoService) { }

  ngOnInit() {
  }
  addTodo(){
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      complited: false,
      date: new Date()
    }
    this.todoSrvice.addTodo(todo);
    this.title = "";
  }
}
