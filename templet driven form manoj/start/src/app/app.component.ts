import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registrationForm') form: NgForm;

  OnFormSubmited(){
    console.log(this.form);
    console.log(this.form.touched);
    console.log(this.form.controls['firstname'].value);
  }
}
