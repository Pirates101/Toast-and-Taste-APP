import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-logging',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './user-logging.component.html',
  styleUrl: './user-logging.component.css'
})
export class UserLoggingComponent {
  constructor(private router: Router,
    private usersService: UsersService) { }

username: string = '';
userpassword: string = '';



userLogging(){


}

}
