import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Task } from "../Model/task";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    http: HttpClient = inject(HttpClient);
    

    CreateTask(task: Task){
        const headers = new HttpHeaders({'My-header': 'hellow-world'})
        this.http.post<{name: string}>('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json', task, {headers: headers})
        .subscribe((response) => {
        })
    }

    DeleteTask(id: string | undefined){
        this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks/' +id+ '.json')
        .subscribe()
    }

    DeleteAllTasks(){
        this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json')
        .subscribe()
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
}