// POC for Routing Guard in angular in ver 15 and higher version useing function 

import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";


// CanActivate route guard function allow the authenticated user to navigate to 
//    anther component 
export const CanActivate = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if(authService.IsAuthenticated()){
        return true;
    }else{
        router.navigate(['/Login']);
        return false;
    }
}

// CanActivateChild route guard function allow the authenticated user to navigate to 
//   another child component
export const CanActivateChild = () => {
    return CanActivate();
}

// Resolve route guard function allow the user to navigate to component after the data is feched 
export const resolve = () =>{
    const courseService = inject(CourseService);
    return courseService.getAllcourses();
}