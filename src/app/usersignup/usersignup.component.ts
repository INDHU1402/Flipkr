import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  
  user = {userName:'', contact:'', emailId:'', password:''};
  confirmPassword:string;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.user.password === this.confirmPassword) {
      this.service.registerUser(this.user).subscribe((details: any) => {console.log(details)});
      this.router.navigate(['login']);
      alert('Registered successfully!, Login to continue');
    }
    else {
      alert('Password did not match');
    }
  }
}