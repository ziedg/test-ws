
import User from '../../models/user';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  showedUsers : any;
  startIndex = 0;
  endIndex = 5;
  constructor (private userService: UsersService, private router: Router) {

   this.userService.getAllUsers().subscribe(users =>{
      this.users = users;

      this.showedUsers = this.users.slice(this.startIndex, this.endIndex);




    });

}

next() {
const start = this.startIndex + 5;
const end = this.endIndex + 5 ;
if ( start < this.users.length) {

        this.startIndex+=5

      if ( end <= this.users.length) {
        this.endIndex += 5 ;
        console.log(this.startIndex,this.endIndex);
        this.showedUsers = this.users.slice(this.startIndex, this.endIndex);
        console.log(this.startIndex,this.endIndex);
        } else {
         this.endIndex+=5;
        this.showedUsers = this.users.slice(this.startIndex);
        console.log(this.startIndex,this.endIndex);
      }
}
}

prev() {

  const start =  this.startIndex - 5;
const end =  this.endIndex - 5;
if ( start >= 0) {
       this.startIndex -= 5;
       this.endIndex -= 5;
        this.showedUsers = this.users.slice(this.startIndex , this.endIndex);
          console.log(this.startIndex,this.endIndex);
      }

}
handleClick(user: User) {

this.userService.postuserDetails(user);
this.router.navigateByUrl('/user-details');

}


  ngOnInit() {
  }

}
