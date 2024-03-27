import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-password',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule],
  templateUrl: './user-password.component.html',
  styleUrl: './user-password.component.css'
})
export class UserPasswordComponent {
  
  constructor (private usersService: UsersService,
               private router: Router,
               private activatedRoute: ActivatedRoute){

  }

  currentpassword: string = "";
  newpassword: string = "";
  confirmnewpassword: string = "";
  password: string = "";

  paramsSubscription!: Subscription;
  userInfo: User | null = null;

  ngOnInit(): void {
    if (this.usersService.currentUsername){
      this.paramsSubscription = this.activatedRoute.params.subscribe(() => {
        this.usersService.getUser(this.usersService.currentUsername).subscribe(user => {
          this.userInfo = user;
        })
      })
    }    
  }

  savepassword(){
    if(this.currentpassword.trim() != this.usersService.currentPassword.trim()){
      alert("Invalid current password, please try again.")
    }
    else if(this.newpassword.trim() != this.confirmnewpassword.trim()){
      alert("New and confirmed password do not match, please try again.")
    }
    else{
      const updatedUser = {
        id: this.usersService.currentUserId,
        username: this.usersService.currentUsername,
        email: this.usersService.currentEmail,
        firstName: this.usersService.currentFirstName,
        lastName: this.usersService.currentLastName,
        userPassword: this.newpassword
      }

      this.usersService.currentPassword = this.newpassword;
  
      this.usersService.updateUser(updatedUser, this.usersService.currentUserId).subscribe(() => {
        alert("Password has been updated.");
        this.router.navigate(['favorites']);        
      })
      
    }
  }

}
