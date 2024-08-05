import { TestBed } from '@angular/core/testing';

import { ShowPromptService } from './show-prompt.service';

describe('ShowPromptService', () => {
  let service: ShowPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
