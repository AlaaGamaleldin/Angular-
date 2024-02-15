import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
selectedCourse: Course;
courseId: number;

courseSerice: CourseService = inject(CourseService);
activeRoute: ActivatedRoute = inject(ActivatedRoute);

ngOnInit(){
//this.courseId = this.activeRoute.snapshot.params['id'];
this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
this.selectedCourse = this.courseSerice.courses.find(course => course.id === this.courseId)
console.log(this.courseId);
}
}
