import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestConsComponent } from './best-cons.component';

describe('BestConsComponent', () => {
  let component: BestConsComponent;
  let fixture: ComponentFixture<BestConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
