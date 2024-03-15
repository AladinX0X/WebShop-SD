import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesDetails } from './WatchesDetails';

describe('WatchesDetails', () => {
  let component: WatchesDetails;
  let fixture: ComponentFixture<WatchesDetails>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchesDetails]
    });
    fixture = TestBed.createComponent(WatchesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
