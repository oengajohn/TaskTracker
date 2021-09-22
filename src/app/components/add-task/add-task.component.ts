import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from './../../Task';
import { UiService } from './../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean;
  showAddTask?: boolean;
  subscription?: Subscription;
  @Output() onAddTask = new EventEmitter<Task>();

  constructor(private ui: UiService) {
    this.text = '';
    this.day = '';
    this.reminder = false;
    this.subscription = this.ui.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit() {


  }
  onSubmit() {
    if (!this.text) {
      alert('Please enter a text');
      return;
    }

    const newTask = {
      text: this.text,
      reminder: this.reminder,
      day: this.day
    };

    // @todo emit event
    this.onAddTask.emit(newTask);

    this.text = '';
    this.reminder = false;
    this.day = '';

  }
}
