import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCheeseComponent } from './show-cheese.component';

describe('ShowCheeseComponent', () => {
  let component: ShowCheeseComponent;
  let fixture: ComponentFixture<ShowCheeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCheeseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
