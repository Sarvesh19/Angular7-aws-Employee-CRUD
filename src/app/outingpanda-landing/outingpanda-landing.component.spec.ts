import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutingpandaLandingComponent } from './outingpanda-landing.component';

describe('OutingpandaLandingComponent', () => {
  let component: OutingpandaLandingComponent;
  let fixture: ComponentFixture<OutingpandaLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutingpandaLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingpandaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
