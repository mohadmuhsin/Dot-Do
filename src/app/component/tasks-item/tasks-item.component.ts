import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() OnToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}
  ngOnInit(): void {}

  OnDelete(task: any) {
    this.OnDeleteTask.emit(task) 
    
  }
  OnToggle(task: any) {
    this.OnToggleReminder.emit(task) 
    
  }
}
