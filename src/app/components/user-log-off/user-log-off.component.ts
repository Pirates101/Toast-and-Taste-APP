import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-log-off',
  standalone: true,
  imports: [],
  templateUrl: './user-log-off.component.html',
  styleUrl: './user-log-off.component.css'
})
export class UserLogOffComponent {
  constructor(private usersService: UsersService){
    this.usersService.currentUserId = 0;
    this.usersService.currentUsername = "";
  }

  

}
