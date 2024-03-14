import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl('male'),
      street: new FormControl(''),
      country: new FormControl('Japan'),
      city: new FormControl(''),
      region: new FormControl(''),
      postal: new FormControl(''),
      
    })
  }
} 
