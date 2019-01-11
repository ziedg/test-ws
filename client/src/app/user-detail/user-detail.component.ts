import Article from 'src/models/article';




import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import {map} from 'rxjs/operators' ;
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetails: Observable<Article []> ;
  articles;
  constructor(private   userService : UsersService) {
    this.userDetails =  this.userService.getuserDetails().pipe( map ((res: any) => <Article[]> res.articles));

  }




  ngOnInit() {
  }

}
