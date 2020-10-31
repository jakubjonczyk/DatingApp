import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) { }

  //ngOnInit(): void {
  // throw new Error('Method not implemented.');
  // }

  ngOnInit() {
this.getUsers();
  }

  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error =>{
  //     console.log(error);
  //   })
  // }
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error =>{
      console.log(error);
    })
  }
}
