import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsDetails } from './LaptopsDetails';

describe('DetailsComponent', () => {
  let component: LaptopsDetails;
  let fixture: ComponentFixture<LaptopsDetails>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopsDetails]
    });
    fixture = TestBed.createComponent(LaptopsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
