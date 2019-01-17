import { TestBed } from '@angular/core/testing';

import { PatientAppointmentService } from './patient-appointment.service';

describe('PatientAppointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientAppointmentService = TestBed.get(PatientAppointmentService);
    expect(service).toBeTruthy();
  });
});
