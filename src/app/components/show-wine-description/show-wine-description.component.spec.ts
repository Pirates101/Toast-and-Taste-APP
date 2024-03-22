import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWineDescriptionComponent } from './show-wine-description.component';

describe('ShowWineDescriptionComponent', () => {
  let component: ShowWineDescriptionComponent;
  let fixture: ComponentFixture<ShowWineDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowWineDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowWineDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
