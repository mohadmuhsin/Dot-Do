import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Task } from 'src/app/Tasks';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'To Do List';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService,private router:Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }



  hasRoute(route :string){
    return this.router.url === route 
  }
}
