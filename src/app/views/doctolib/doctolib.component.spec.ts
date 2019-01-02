import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctolibComponent } from './doctolib.component';

describe('DoctolibComponent', () => {
  let component: DoctolibComponent;
  let fixture: ComponentFixture<DoctolibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctolibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
