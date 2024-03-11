import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  emailAddress: string = '';


  @ViewChild('registrationForm') form: NgForm;

 
  genders = [
  {id:'check-male', value: 'male', display: 'Male'},
  {id:'check-female', value: 'female', display: 'Female'},
  {id:'check-other', value: 'other', display: 'Prefer not to say'},
  ]

  OnFormSubmited(){
    console.log(this.form);
    console.log(this.form.touched);
    console.log(this.form.controls['firstname'].value);
//for resseting the template 
    this.form.reset();

//to set some defoult value to the form
    this.form.form.patchValue({
      gender: 'male',
      address: {
        country: 'EGYPT',
      }
    })
  }
  
  GenerateUsername(){
    let username = '';

    if(this.firstName.length >= 3){
      username += this.firstName.slice(0, 3);
    }else{
      username += this.firstName;
    }
    if(this.lastName.length >= 3){
      username += this.lastName.slice(0, 3);
    }else{
      username += this.lastName;
    }

    let datetime = new Date(this.dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();
    console.log(username);

    

    // this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   gender: this.form.value.gender,
    //   dob: this.form.value.dob,
    //   username: username,
    //   address: {
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal,
    //   }
    // });

    this.form.form.patchValue({
      username: username
    })
  }
}
