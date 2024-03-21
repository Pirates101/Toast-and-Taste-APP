import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggingComponent } from './user-logging.component';

describe('UserLoggingComponent', () => {
  let component: UserLoggingComponent;
  let fixture: ComponentFixture<UserLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoggingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
