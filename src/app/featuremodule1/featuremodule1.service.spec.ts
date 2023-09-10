import { TestBed } from '@angular/core/testing';

import { Featuremodule1Service } from './featuremodule1.service';

describe('Featuremodule1Service', () => {
  let service: Featuremodule1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Featuremodule1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
