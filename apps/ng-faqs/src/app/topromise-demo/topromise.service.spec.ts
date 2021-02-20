import { TestBed } from '@angular/core/testing';

import { TopromiseService } from './topromise.service';

describe('TopromiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopromiseService = TestBed.get(TopromiseService);
    expect(service).toBeTruthy();
  });
});
