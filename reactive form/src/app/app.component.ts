import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template-driven-form';

  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl('male'),
      street: new FormControl(''),
      country: new FormControl('Japan'),
      city: new FormControl(''),
      region: new FormControl(''),
      postal: new FormControl(''),
      skills: new FormControl('')
    })
  }
  OnFormSubmitted(){
    console.log(this.reactiveForm);
  }
} 
