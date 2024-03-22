import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWineRecommendationComponent } from './show-wine-recommendation.component';

describe('ShowWineRecommendationComponent', () => {
  let component: ShowWineRecommendationComponent;
  let fixture: ComponentFixture<ShowWineRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowWineRecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowWineRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
