import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBodyTreeComponent } from './todo-body-tree.component';

describe('TodoBodyTreeComponent', () => {
  let component: TodoBodyTreeComponent;
  let fixture: ComponentFixture<TodoBodyTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoBodyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBodyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
