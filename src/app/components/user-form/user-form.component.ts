import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];

        this.activatedRoute.queryParams.subscribe((queryParams) => {
          this.username = queryParams['username'];
          this.firstname = queryParams['firstname'];
          this.lastname = queryParams['lastname'];
          this.email = queryParams['email'];
          this.userpassword = queryParams['userpassword'];
        })
      }
    })
  }

  submituserform(){
    if (this.id) {
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
      firstname: this.firstname,
      lastname: this.lastname,
      userpassword: this.userpassword
    }

    this.usersService.updateUser(updatedUser, this.id!).subscribe(() => {
      this.router.navigate(['userlogging']);
    })
  }

  addUser() {

    
    const newUser = {
      username: this.username,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,      
      userpassword: this.userpassword
    };

    this.usersService.postUser(newUser).subscribe(() => {
      this.router.navigate(['userlogging']);
    });
  }

}
