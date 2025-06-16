import { TestBed } from '@angular/core/testing';

import { TijoloService } from './tijolo.service';

describe('TijoloService', () => {
  let service: TijoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TijoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
