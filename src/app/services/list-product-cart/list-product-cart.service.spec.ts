import { TestBed } from '@angular/core/testing';

import { ListProductCartService } from './list-product-cart.service';

describe('ListProductCartService', () => {
  let service: ListProductCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProductCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
