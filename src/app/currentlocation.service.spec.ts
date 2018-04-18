import { TestBed, inject } from '@angular/core/testing';

import { CurrentlocationService } from './currentlocation.service';

describe('CurrentlocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentlocationService]
    });
  });

  it('should be created', inject([CurrentlocationService], (service: CurrentlocationService) => {
    expect(service).toBeTruthy();
  }));
});
