import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private usersService: UsersService){}

  get currentUsername(){
    return this.usersService.currentUsername;
  }

  get currentUserId(){
    return this.usersService.currentUserId;
  }

  get currentFirstName(){
    return this.usersService.currentFirstName;
  }

  get currentLastName(){
    return this.usersService.currentLastName;
  }
  
}
