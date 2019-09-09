import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFriendsTodosComponent } from './user-friends-todos.component';

describe('UserFriendsTodosComponent', () => {
  let component: UserFriendsTodosComponent;
  let fixture: ComponentFixture<UserFriendsTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFriendsTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFriendsTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
