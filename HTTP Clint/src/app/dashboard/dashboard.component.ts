import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/task';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  taskService: TaskService = inject(TaskService);
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
   this.taskService.CreateTask(data);
   this.fetchAllTasks();
  }
  
  private fetchAllTasks(){
   this.taskService.GetAllTask().subscribe((tasks) => {
    this.allTasks = tasks;
  });
  }

  DeleteTask(id: string | undefined){
    this.taskService.DeleteTask(id);
    this.fetchAllTasks();
  }

  DeleteAllTasks(){
    this.taskService.DeleteAllTasks();
    this.fetchAllTasks();
  }
}
