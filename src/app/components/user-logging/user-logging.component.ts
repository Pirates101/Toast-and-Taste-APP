import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-logging',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './user-logging.component.html',
  styleUrl: './user-logging.component.css'
})
export class UserLoggingComponent {
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) { }
  
  username: string = '';
  userpassword: string = '';
  paramsSubscription!: Subscription 
  userInfo: User | null = null;


  userLogging(){
    if (this.username && this.userpassword){
      this.paramsSubscription = this.activatedRoute.params.subscribe(() => {
        this.usersService.getUser(this.username).subscribe(user => {
          this.userInfo = user;
          if (this.userInfo != null){
            this.usersService.currentUserId = this.userInfo.id;
            this.usersService.currentUsername = this.userInfo.username;
            this.router.navigate(['favorites']);
          }
          else{
            this.usersService.currentUserId = 0;
            this.usersService.currentUsername = "";
            this.router.navigate(['userform']);
          }  
        })
      })      
    }
  }
}
