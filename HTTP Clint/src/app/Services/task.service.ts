import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Task } from "../Model/task";
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
import { LoggingService } from "./Logging.Service";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    http: HttpClient = inject(HttpClient);
    errorSubject = new Subject<HttpErrorResponse>();
    loggingService: LoggingService = inject(LoggingService);
    

    CreateTask(task: Task){
        const headers = new HttpHeaders({'My-header': 'hellow-world'})
        this.http.post<{name: string}>('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json', task, {headers: headers})
        .pipe(catchError((err) => {
          const errorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()};
          this.loggingService.logError(errorObj)
          return throwError(() => err);
        }))
        .subscribe({error: (err) => {
          this.errorSubject.next(err);
    }});
    }

    DeleteTask(id: string | undefined){
        this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks/' +id+ '.json')
        .pipe(catchError((err) => {
          const errorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()};
          this.loggingService.logError(errorObj)
          return throwError(() => err);
        }))
        .subscribe({error: (err) => {
          this.errorSubject.next(err);
    }})
    }

    DeleteAllTasks(){
        this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json')
        .pipe(catchError((err) => {
          const errorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()};
          this.loggingService.logError(errorObj)
          return throwError(() => err);
        }))
        .subscribe({error: (err) => {
          this.errorSubject.next(err);
    }})
    }

    GetAllTask(){
        return this.http.get<{[key: string]: Task}>('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json')
        .pipe(map((response) => {
          //transforming the data form obj to Array
          let tasks = [];
          for(let key in response){
            if(response.hasOwnProperty(key)){
              tasks.push({...response[key], id: key});
            }
          }
          return tasks;
        }), catchError((err) => {
          const errorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()};
          this.loggingService.logError(errorObj)
          return throwError(() => err);
        }))
    }
    UpDateTask(id: string | undefined, data: Task){
      this.http.put('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks/' +id+ '.json', data)
        .pipe(catchError((err) => {
          const errorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()};
          this.loggingService.logError(errorObj)
          return throwError(() => err);
        }))
        .subscribe({error: (err) => {
          this.errorSubject.next(err);
    }});
    }
    getTaskDetails(id: string | undefined){
      return this.http.get('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks/' +id+ '.json')
      .pipe(map((response) => {
        console.log(response);
        let task = {};
        task = {...response, id: id};
        return task;
      }))
      
    }
}