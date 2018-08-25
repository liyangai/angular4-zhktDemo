import { TestBed, inject } from '@angular/core/testing';

import { DataBookListService } from './data-book-list.service';

describe('DataBookListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBookListService]
    });
  });

  it('should be created', inject([DataBookListService], (service: DataBookListService) => {
    expect(service).toBeTruthy();
  }));
});
