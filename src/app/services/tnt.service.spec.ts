import { TestBed } from '@angular/core/testing';

import { TntService } from './tnt.service';

describe('TntServiceService', () => {
  let service: TntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
