import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMultiComponent } from './todo-multi.component';

describe('TodoMultiComponent', () => {
  let component: TodoMultiComponent;
  let fixture: ComponentFixture<TodoMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
