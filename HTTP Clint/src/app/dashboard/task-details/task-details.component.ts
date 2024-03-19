import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  @Output()
  CloseDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();
  OnCloseViewTask(){
    this.CloseDetailView.emit(false);
  }

}
