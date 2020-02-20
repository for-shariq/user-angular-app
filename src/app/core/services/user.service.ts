import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
ApiUrl:string; 
  constructor(private http:HttpClient){
    this.ApiUrl = 'https://api.github.com/users'

  }

  getUsers()
  {
    //console.log(`${this.ApiUrl}`);
    return this.http.get(`${this.ApiUrl}?per_page=10`);
    // this.http.get('https://api.github.com/users?per_page=10')
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

  getUser(username: string){
    return this.http.get(`${this.ApiUrl}/${username}?per_page=10`);
  }
}
