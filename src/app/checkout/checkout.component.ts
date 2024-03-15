import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, public cartService: CartService) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      houseNumber: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      opinion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = this.checkoutForm.value;
    console.log('Checkout Data:', formData);
    this.cartService.clearCart();
    alert('Thank you for your purchase! we have sent you the Bill to your Email!');
    this.router.navigateByUrl('/');
    this.checkoutForm.reset();
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
