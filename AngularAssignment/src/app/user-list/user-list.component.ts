import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user = null;
  showUserDetail = false;

  users=[
    {FirstName:'User', LastName:'One', Email:'user.one@email.com', IsActive: true},
    {FirstName:'User', LastName:'Two', Email:'user.two@email.com', IsActive:false},
    {FirstName:'User', LastName:'Three', Email:'user.three@email.com', IsActive:true},
    {FirstName:'User', LastName:'Four', Email:'user.four@email.com', IsActive:false},
    {FirstName:'User', LastName:'Five', Email:'user.five@email.com', IsActive:true},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onShowUserDetail(user){
      this.user = user;
      this.showUserDetail = true;
  }
}
