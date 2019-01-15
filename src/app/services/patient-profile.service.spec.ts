import { TestBed } from '@angular/core/testing';

import { PatientProfileService } from './patient-profile.service';

describe('PatientProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientProfileService = TestBed.get(PatientProfileService);
    expect(service).toBeTruthy();
  });
});
