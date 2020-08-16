import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userName : string;
  password : string;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit(): void{
    this.router.navigate(['']);
    alert('Logged in successfully');
   // jQuery('#empModel').modal('show');
    this.service.getUser(this.userName, this.password).subscribe((result: any) => {
     console.log(result);
      if(result) {
        alert('Logged in successfully');
        this.router.navigate(['home']);
      }
      else {
        alert('Invalid credentials');
      }});
    }
}
