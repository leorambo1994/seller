import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user : any = {};  // 是一个用户对象

  constructor( 
    private router : Router ,
    private route : ActivatedRoute ,
    private userService : UserService ) { 
   
  }

  ngOnInit(): void {

    // 根据用户id, 获取用户详情
    this.route.params.subscribe( params => {
      this.userService.getUserById( params['id'] ).subscribe( data => {
        this.user = data;
        console.log('用户详情：' , this.user);
      });
    });

  }

  updateUser(){

    const obj = {
      username : this.user.username,
      password : this.user.password,
      email : this.user.email,
      mobile : this.user.mobile,
    };

    this.route.params.subscribe( parmas => {
      this.userService.updateUser( parmas['id'] , obj ).subscribe( data => {  // 一定要调用 subscribe ， 才会发起网络请求
        this.router.navigate(['/admin/user-list']);
      });
    });
  }

}
