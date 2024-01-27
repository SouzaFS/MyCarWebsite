import { TestBed } from '@angular/core/testing';

import { DbInteractService } from './db-interact.service';

describe('DbInteractService', () => {
  let service: DbInteractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbInteractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
