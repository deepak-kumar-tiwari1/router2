import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
console.log('Login Component');



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  
  createForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.loginForm.value);
  }
}
