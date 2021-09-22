import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'TaskTracker';
  showAddTask?: boolean;
  subscription?: Subscription;


  constructor(private ui: UiService, private router: Router) {
    this.subscription = this.ui.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit() {


  }
  toggleAddTask() {
    this.ui.toggleAddTask();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
