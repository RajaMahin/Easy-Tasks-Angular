import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppTasksComponent } from "./app-tasks/app-tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, AppTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easy-task';

  users = DUMMY_USERS;

  taskName = "MY TASK"

  onSelectUser(id: string) {
    console.log("USER ID -> " + " " + id);
  }


}
