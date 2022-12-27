import { TestBed } from '@angular/core/testing';

import { DepecheService } from './depeche.service';

describe('DepecheService', () => {
  let service: DepecheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepecheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
