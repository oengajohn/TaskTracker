import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from './../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
  }
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);

  } onToggle(task: Task) {
    this.onToggleReminder.emit(task);

  }



}
