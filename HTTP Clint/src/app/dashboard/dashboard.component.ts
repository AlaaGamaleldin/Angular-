import { Component, OnInit, Output, inject } from '@angular/core';
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
  editeMode: boolean = false;
  selectTaskToEdit: Task;
  currentTaskId: string = '';

  ngOnInit(){
    this.fetchAllTasks();
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
  OnEditTaskClicked(id: string | undefined){
    this.currentTaskId = id;
    this.showCreateTaskForm = true;
    this.editeMode = true;
    this.selectTaskToEdit = this.allTasks.find((task) => {return task.id === id});
  }
}
