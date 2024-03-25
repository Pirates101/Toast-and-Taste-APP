import { TestBed } from '@angular/core/testing';

import { UserCombinationsService } from './user-combinations.service';

describe('UserCombinationsService', () => {
  let service: UserCombinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCombinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
