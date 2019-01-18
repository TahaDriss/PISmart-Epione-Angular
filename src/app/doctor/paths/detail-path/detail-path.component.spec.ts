import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPathComponent } from './detail-path.component';

describe('DetailPathComponent', () => {
  let component: DetailPathComponent;
  let fixture: ComponentFixture<DetailPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
