import { TestBed } from '@angular/core/testing';

import { DummyRestAPIService } from './dummy-rest-api.service';

describe('HttpService', () => {
  let service: DummyRestAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyRestAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
