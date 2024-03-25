import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCombinationsComponent } from './user-combinations.component';

describe('UserCombinationsComponent', () => {
  let component: UserCombinationsComponent;
  let fixture: ComponentFixture<UserCombinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCombinationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
