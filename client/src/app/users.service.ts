import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Article from 'src/models/article';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/api/user/' ;
  users:    Observable<User[]> ;
  userDeatail;
  constructor(private   _http: HttpClient) {
               this.users =    this._http.get(`${this.url}getUsersInfos`).pipe( map ((res) => <User[]> res ));
          }



      public postuserDetails (user: User) {
             this.userDeatail = this._http.post(`${this.url}articles`, { email: user.email} );


      }

      public getuserDetails (): Observable <Article []> {
        return    this.userDeatail ;


 }
      public    getAllUsers ():  Observable<User[]> {
        return   this.users;

      }
}
