import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo-item1',
  templateUrl: './todo-item1.component.html',
  styleUrls: ['./todo-item1.component.css']
})  
export class TodoItem1Component implements OnInit {
  @Input() todo : Todo;
  @Input () i : number
@Output() todoDelete : EventEmitter<Todo> = new EventEmitter
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(todo : Todo){
    console.log("Delete Btn has been triggered ");
    this.todoDelete.emit(todo)
  }

  markDone(todo : Todo){
    this.todoCheckBox.emit(todo);
  }
  
  
  } 

