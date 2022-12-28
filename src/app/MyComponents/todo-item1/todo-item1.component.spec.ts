import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItem1Component } from './todo-item1.component';

describe('TodoItem1Component', () => {
  let component: TodoItem1Component;
  let fixture: ComponentFixture<TodoItem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItem1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
