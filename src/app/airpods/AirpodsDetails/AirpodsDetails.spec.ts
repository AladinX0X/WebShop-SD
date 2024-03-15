import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpodsDetails } from './AirpodsDetails';

describe('AirpodsDetails', () => {
  let component: AirpodsDetails;
  let fixture: ComponentFixture<AirpodsDetails>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirpodsDetails]
    });
    fixture = TestBed.createComponent(AirpodsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
