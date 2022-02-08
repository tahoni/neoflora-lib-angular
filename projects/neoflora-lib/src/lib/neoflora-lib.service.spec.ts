import { TestBed } from '@angular/core/testing';

import { NeofloraLibService } from './neoflora-lib.service';

describe('NeofloraLibService', () => {
  let service: NeofloraLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeofloraLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
