// import { Component } from '@angular/core';

import {
  Component,
  Input,
  Output,
  EventEmitter,
  output,
  input,
} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//Signals

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Component Input
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //Appropriate Objects As Inputs & Adding  Appropriate Typesss
  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };

  @Output()
  select = new EventEmitter<string>();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;

  }

  onSelectUser() {
        this.select.emit(this.user.id);

    // this.select.emit(this.id);
    // this.select.emit(this.id());
  }
}

//  //NOTES

// Signals are executed as functions and fetches the latest values
// Signals are different from common state management mechanism
// Signals are new and were introduced in Angular 16

// export class UserComponent {
//   SelectedUser = signal(DUMMY_USERS[randomIndex]);

//   //Computed Functions( Signals)
//   imagePath = computed(() => 'assets/users/' + this.SelectedUser().avatar);
//   // get ImagePath() {
//   //   return 'assets/users/' + this.SelectedUser.avatar;
//   // }

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//     this.SelectedUser.set(DUMMY_USERS[randomIndex]);

//     // this.SelectedUser = DUMMY_USERS[randomIndex];
//   }
// }
