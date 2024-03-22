import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  id: null | number = null;
  username: string = '';
  userpassword: string = '';
  email: string = '';
  firstname: string = '';
  lastname: string = '';
  confirmpassword: string = '';

  paramsSubscription!: Subscription;
  userInfo: User | null = null;

  
  ngOnInit(): void {
    if (this.usersService.currentUsername){
      this.paramsSubscription = this.activatedRoute.params.subscribe(() => {
        this.usersService.getUser(this.usersService.currentUsername).subscribe(user => {
          this.userInfo = user;
          if (this.userInfo != null){
            this.id = this.userInfo.id;
            this.username = this.userInfo.username;
            this.firstname = this.userInfo.firstName;
            this.lastname = this.userInfo.lastName;
            this.email = this.userInfo.email;
            this.userpassword = this.userInfo.userPassword;
          }  
        })
      })
    }    
  }

  submituserform(){
    if (this.usersService.currentUsername) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  updateUser() {
    const updatedUser = {
      id: this.id!,
      username: this.username,
      email: this.email,
      firstName: this.firstname,
      lastName: this.lastname,
      userPassword: this.userpassword
    }

    this.usersService.updateUser(updatedUser, this.id!).subscribe(() => {
      this.router.navigate(['favorites']);
    })
  }

  addUser() {    
    const newUser = {
      username: this.username,
      email: this.email,
      firstName: this.firstname,
      lastName: this.lastname,
      userPassword: this.userpassword
    };

    this.usersService.postUser(newUser).subscribe(params => {
      this.usersService.currentUserId = params['id']
      this.usersService.currentUsername = this.username;
      this.router.navigate(['cheeses']);      
    });
  }
}
