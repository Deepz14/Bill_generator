import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelBillsPreviewComponent } from './fuel-bills-preview.component';

describe('FuelBillsPreviewComponent', () => {
  let component: FuelBillsPreviewComponent;
  let fixture: ComponentFixture<FuelBillsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelBillsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelBillsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
