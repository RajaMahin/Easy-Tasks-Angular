import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

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
<<<<<<< HEAD

  onSelectUser(id: string){
    console.log("USER ID -> " + " " + id);
  }
=======
>>>>>>> 727258da5f57f6f47ae160c92f48989241555662
}
