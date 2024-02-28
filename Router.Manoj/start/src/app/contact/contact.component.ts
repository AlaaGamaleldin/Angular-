import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Services/authguard.services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{
firstName: string = '';
lastName: string = '';
country: string = 'Egypt';
subject: string = '';

isSubmited: boolean = false;

OnSubmit(){
  this.isSubmited = true;
}
canExit(){
  if((this.firstName || this.lastName || this.subject) && !this.isSubmited){
  return confirm('You have unsaved changes. Do you want to leave');
}else{
  return true;
}
}
}
