import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentdelComponent } from './appointmentdel.component';

describe('AppointmentdelComponent', () => {
  let component: AppointmentdelComponent;
  let fixture: ComponentFixture<AppointmentdelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentdelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
