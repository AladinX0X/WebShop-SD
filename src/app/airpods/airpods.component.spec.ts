import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpodsComponent } from './airpods.component';

describe('AirpodsComponent', () => {
  let component: AirpodsComponent;
  let fixture: ComponentFixture<AirpodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirpodsComponent]
    });
    fixture = TestBed.createComponent(AirpodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
