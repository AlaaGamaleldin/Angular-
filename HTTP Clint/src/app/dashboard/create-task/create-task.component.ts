import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Model/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements AfterViewInit{
  @Input() isEditeMode: boolean = false;
  @Input() selectTaskToEdit: Task;
  @ViewChild('taskForm') taskForm: NgForm;
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskdata: EventEmitter<Task> = new EventEmitter<Task>();

  ngAfterViewInit(){
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectTaskToEdit);
    }, 0)
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }
  OnFormSubmitted(form: NgForm){
    this.EmitTaskdata.emit(form.value);
    this.CloseForm.emit(false);
  }
}
