import { TestBed } from '@angular/core/testing';

import { MarkertService } from './markert.service';

describe('MarkertService', () => {
  let service: MarkertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
