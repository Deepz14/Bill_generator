import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelBillsComponent } from './fuel-bills.component';

describe('FuelBillsComponent', () => {
  let component: FuelBillsComponent;
  let fixture: ComponentFixture<FuelBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
