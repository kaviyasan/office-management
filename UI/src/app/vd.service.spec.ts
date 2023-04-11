import { TestBed } from '@angular/core/testing';

import { VdService } from './vd.service';

describe('VdService', () => {
  let service: VdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
