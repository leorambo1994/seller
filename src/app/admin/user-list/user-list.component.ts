import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : any = [];

  constructor(
    private modal: NzModalService,
    private router: Router,
    private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log("获取所有用户：", this.users);
      })
  }

  // 删除用户
  deleteUser(id) {

    // 弹出对话框modal popup
    this.modal.confirm({
      nzTitle: '删除此用户？',
      nzContent: '<b style="color: red;">确定删除？</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        console.log('OK');

        this.userService.deleteUser(id).subscribe(data => {
          this.router.navigate(['/admin/user-list']);

          // 刷新用户列表，刷新数据
          this.users = this.users.filter(user =>
            user._id !== id
          );
        });
        
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });

  }

}
