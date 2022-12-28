import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodosComponent } from './MyComponents/todos/todos.component'
import { TodoItem1Component } from './MyComponents/todo-item1/todo-item1.component'
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component'
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItem1Component,
    AddTodoComponent,
    AboutComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule , FormsModule],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
