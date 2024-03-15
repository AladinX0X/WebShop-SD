import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesDetails } from './PhonesDetails';


describe('PhonesDetails', () => {
  let component: PhonesDetails;
  let fixture: ComponentFixture<PhonesDetails>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonesDetails]
    });
    fixture = TestBed.createComponent(PhonesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
