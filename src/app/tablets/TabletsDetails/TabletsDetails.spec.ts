import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletsDetails } from './TabletsDetails';

describe('DetailsComponent', () => {
  let component: TabletsDetails;
  let fixture: ComponentFixture<TabletsDetails>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletsDetails]
    });
    fixture = TestBed.createComponent(TabletsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
