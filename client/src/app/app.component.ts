import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //OnInit
  title = 'The Dating-Site';
  users: any;
  //users: any;

  //constructor(private http: HttpClient) {}
  constructor(private accountService: AccountService) {}

  //ngOnInit(): void {
  // throw new Error('Method not implemented.');
  // }

  ngOnInit() {
this.setCurrentUser();
  }

  setCurrentUser(){

    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error =>{
  //     console.log(error);
  //   })
  // }

}
