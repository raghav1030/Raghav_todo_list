import { Component, OnInit } from '@angular/core'
import { Todo } from 'src/app/Todo'
// import { TodoItem1Component } from '../todo-item1/todo-item1.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  LocalItem : string | null
  todos: Todo[] | any

  constructor() {
    this.LocalItem = localStorage.getItem("todos");

    if (this.LocalItem == null){
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.LocalItem)
    }

  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    console.log(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  todoAdd(todo: Todo) {
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  toggleTodo(todo : Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active 
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
    
  }


