import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }

  baseUrl : string = 'http://localhost:3000/users';

  // get 获取用户列表，<User[]> 表示后台返回一个数组，数组类型是 User[];

  getUsers(){
    return this.http.get(this.baseUrl);
  }

  // get 获取指定用户

  getUserById(id){
    return this.http.get(this.baseUrl + '/' + id);
  }
  
  // 创建用户

  // createUser( obj ){
  //   return this.http.post(this.baseUrl , obj);
  // }

  // 修改用户

  updateUser( id , obj ){
    return this.http.put(this.baseUrl + '/' + id , obj );
  }

  // 删除指定用户

  deleteUser( id ){
    return this.http.delete(this.baseUrl + '/' + id);
  }
  // 以上所有的返回都是一个对象，Observable

}
