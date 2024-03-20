import { Component, OnInit, Output, inject } from '@angular/core';
import { Task } from '../Model/task';
import { TaskService } from '../Services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  taskService: TaskService = inject(TaskService);
  allTasks: Task[] = [];
  editeMode: boolean = false;
  selectTaskToEdit: Task;
  currentTaskId: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;
  errorSub: Subscription;
  currentTask: Task | null = null;
  

  ngOnInit(){
    this.fetchAllTasks();
    this.errorSub = this.taskService.errorSubject.subscribe({next: (httpError) => {
      this.setErrorMessage(httpError);
  }})
  }
  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editeMode = false;
    this.selectTaskToEdit ={
      title: '',
      desc: '',
      assignedTo: '',
      createdAt: '',
      priority: '',
      status: '',
      id: ''
    }
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;

  }
  CreatOurUpdateTask(data: Task){
    if(!this.editeMode)
   this.taskService.CreateTask(data);
  else
  this.taskService.UpDateTask(this.currentTaskId, data);
   this.fetchAllTasks();
  }
  FetchAllTaskClicked(){
    this.fetchAllTasks()
  }

  
  private fetchAllTasks(){
    this.isLoading = true;
    this.taskService.GetAllTask().subscribe({next: (tasks) => {
    this.allTasks = tasks;
    this.isLoading = false;
  }, error: (error) => {
    this.setErrorMessage(error);
    this.isLoading = false;
    
  }})
  }
  private setErrorMessage(err: HttpErrorResponse){
    if(err.error.error === 'Permission denied'){
      this.errorMessage = 'You di not have permission to perform this action';
    }
    else{
      this.errorMessage = err.message;
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  DeleteTask(id: string | undefined){
    this.taskService.DeleteTask(id);
    this.fetchAllTasks();
  }

  DeleteAllTasks(){
    this.taskService.DeleteAllTasks();
    this.fetchAllTasks();
  }
  OnEditTaskClicked(id: string | undefined){
    this.currentTaskId = id;
    this.showCreateTaskForm = true;
    this.editeMode = true;
    this.selectTaskToEdit = this.allTasks.find((task) => {return task.id === id});
  }
  showCurrentTaskDetails(id: string | undefined){
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({next: (data: Task) => {
      this.currentTask = data;
    }});
  }
  CloseTaskDetails(){
    this.showTaskDetails = false;
  }
}
