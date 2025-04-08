import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css'
})


export class AppTasksComponent {
  @Input({ required: true }) taskName!: string;

}
