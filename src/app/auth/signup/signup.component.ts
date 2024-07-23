import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
  phonePattern = '^\\+381[0-9]{7,9}$';
  passwordPattern = '^(?=.*\\d).{8,}$';

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log('Form submitted successfully', form.value);
      this.authService.registerUser(form.value.email, form.value.password, {
        firstName: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        address: form.value.address,
        favoriteItems: form.value.favorite
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
