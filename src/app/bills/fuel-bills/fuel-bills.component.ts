import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fuel-bills',
  templateUrl: './fuel-bills.component.html',
  styleUrls: ['./fuel-bills.component.css']
})
export class FuelBillsComponent implements OnInit {

  fuelBillForm: any;
  quantity: any = 0;
  showQuantity: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.fuelBillForm = new FormGroup({
      logo: new FormControl('bharat', [Validators.required]),
      stationName: new FormControl('', [Validators.required]),
      stationAddress: new FormControl('', [Validators.required]),
      fuelRate: new FormControl('', [Validators.required]),
      totalAmount: new FormControl('', [Validators.required]),
      billDate: new FormControl('', [Validators.required]),
      billTime: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      vehicleNum: new FormControl('', [Validators.required]),
      vehicleType: new FormControl('', [Validators.required]),
      paymentType: new FormControl('', [Validators.required]),
      invoiceNum: new FormControl('', [Validators.required]),
      tax: new FormControl('none', [Validators.required]),
      fileName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  updateQuantity(){
    let totalamount = this.fuelBillForm.get('totalAmount').value;
    let fuelRate = this.fuelBillForm.get('fuelRate').value;
    if(totalamount && fuelRate){
      let calc = String(totalamount / fuelRate);
      this.showQuantity = true;
      this.quantity = parseFloat(calc).toFixed(2)
    }else{
      this.showQuantity = false;
    }
  }

  resetForm(): void{
    this.fuelBillForm.reset();
    this.fuelBillForm.get('logo').setValue('bharat');
    this.fuelBillForm.get('tax').setValue('none');
  }

}
