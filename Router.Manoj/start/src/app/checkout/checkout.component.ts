import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

activeRoute: ActivatedRoute = inject(ActivatedRoute);
router: Router = inject(Router);
course;

ngOnInit(){
  //next code used for access statec data 

// this.activeRoute.data.subscribe((data) => {
// this.course = data;
// })

//and this code to access the dinamic data
this.course = history.state;

}
}
