import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogOffComponent } from './user-log-off.component';

describe('UserLogOffComponent', () => {
  let component: UserLogOffComponent;
  let fixture: ComponentFixture<UserLogOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogOffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLogOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
