import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  isLogin: any = false;

  constructor(
    // private fb: FormBuilder ,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {

  }

  ngOnInit(): void {

    this.validateForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl('', [Validators.required])
    });

    // this.validateForm = this.fb.group({

    //   userName: [null, [Validators.required]],
    //   password: [null, [Validators.required]],

    // });


  }

  // 点击登录按钮
  onSubmit() {

    const obj = {
      username: this.validateForm.controls.userName.value,
      password: this.validateForm.controls.password.value
    };

    this.authService.login(obj).subscribe(data => {

      if (data['code'] == '0') {  // 登录成功

        this.isLogin = true;
        sessionStorage.setItem('status', this.isLogin); // 保持登录状态
        this.alertService.success('登录成功!正在跳转...');
        setTimeout(() => {
          this.router.navigate(['/admin/product-list']);
        }, 3000);

      }
      else {
        this.alertService.error(data['msg']);
      }
    });

  }
}
