import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];

  ngOnInit(){
    this.fetchAllTasks();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;

  }
  CreateTask(data: Task){
    const headers = new HttpHeaders({'My-header': 'hellow-world'})
    this.http.post<{name: string}>('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json', data, {headers: headers})
    .subscribe((response) => {
      //console.log(response);
        this.fetchAllTasks();
    })
  }
  
  private fetchAllTasks(){
    this.http.get<{[key: string]: Task}>('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json')
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
    .subscribe((tasks) => {
      this.allTasks = tasks;
    })
  }

  DeleteTask(id: string | undefined){
    this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks/' +id+ '.json')
    .subscribe((res) => {
      //console.log(res);
      this.fetchAllTasks();
    })
  }

  DeleteAllTasks(){
    this.http.delete('https://angularhttpclint-6c95e-default-rtdb.firebaseio.com/tasks.json')
    .subscribe((res) => {
      this.fetchAllTasks();
    })
  }
}
