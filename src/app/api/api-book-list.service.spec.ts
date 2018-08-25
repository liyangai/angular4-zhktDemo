import { TestBed, inject } from '@angular/core/testing';

import { ApiBookListService } from './api-book-list.service';

describe('ApiBookListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBookListService]
    });
  });

  it('should be created', inject([ApiBookListService], (service: ApiBookListService) => {
    expect(service).toBeTruthy();
  }));
});
