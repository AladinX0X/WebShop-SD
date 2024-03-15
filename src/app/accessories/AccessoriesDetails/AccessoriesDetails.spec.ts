import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesDetails } from './AccessoriesDetails';

describe('AccessoriesDetails', () => {
  let component: AccessoriesDetails;
  let fixture: ComponentFixture<AccessoriesDetails>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoriesDetails]
    });
    fixture = TestBed.createComponent(AccessoriesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
