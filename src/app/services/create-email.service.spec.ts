import { TestBed } from '@angular/core/testing';

import { CreateEmailService } from './create-email.service';

describe('CreateEmailService', () => {
  let service: CreateEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
