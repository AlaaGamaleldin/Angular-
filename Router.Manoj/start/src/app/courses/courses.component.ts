import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses: Course[];
  searchString: string;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(){
    this.searchString = this.activeRoute.snapshot.queryParams['search']
    //console.log(this.searchString);

    if(this.searchString === undefined || this.searchString === ''){
      this.AllCourses = this.coursesService.courses;
    }else{
      this.AllCourses = this.coursesService.courses.filter(x => x.title.toLowerCase().includes(this.searchString.toLowerCase()));
    }
  }; 
}
