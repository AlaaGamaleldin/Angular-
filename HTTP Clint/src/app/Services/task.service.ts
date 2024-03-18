import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Task } from "../Model/task";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    http: HttpClient = inject(HttpClient);
    errorSubject = new Subject<HttpErrorResponse>();
    

    CreateTask(task: Task){
        const headers = new HttpHeaders({'My-header': 'hellow-world'})
        this.http.post<{name: string}>('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json', task, {headers: headers})
        .subscribe({error: (err) => {
          this.errorSubject.next(err);
    }});
    }

    DeleteTask(id: string | undefined){
        this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks/' +id+ '.json')
        .subscribe({error: (err) => {
          this.errorSubject.next(err);
    }})
    }

    DeleteAllTasks(){
        this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json')
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
        }))
    }
    UpDateTask(id: string | undefined, data: Task){
      this.http.put('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks/' +id+ '.json', data)
        .subscribe({error: (err) => {
          this.errorSubject.next(err);
    }})
    }
}