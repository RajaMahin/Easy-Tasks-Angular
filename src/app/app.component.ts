import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easy-task';

  users = DUMMY_USERS;


  onSelectUser(id: string) {
    console.log("USER ID -> " + " " + id);
  }


}
