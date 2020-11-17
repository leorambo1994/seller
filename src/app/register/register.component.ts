import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validateForm: FormGroup;
  isLogin : any = false;
  forbiddenNames: ['zhangsan', 'lixiaosi'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {

  }


  ngOnInit(): void {

    // this.validateForm = new FormGroup({

    //   userName : new FormControl('' , [
    //     Validators.required , 
    //     this.forbiddenNamesValidator.bind(this)
    //   ]),
    //   email : new FormControl('' , [
    //     Validators.required , 
    //     // Validators.pattern('[^@]*@[^@]*')
    //     Validators.email
    //   ]),
      // mobile : new FormControl('' , [Validators.required 
      // ]),
      // smscode : new FormControl('' , [Validators.required 
      // ]),
    //   password : new FormControl('' , [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    //   ]),
    //   checkPassword : new FormControl('' , [
    //     Validators.required , 
    //     this.confirmationValidator.bind(this)
    //   ])

    // });

    this.validateForm = this.fb.group({

      userName: [null, [
        Validators.required,
        // Validators.minLength(6),
        // this.forbiddenNamesValidator.bind(this),
      ]],

      email: [null, [
        // Validators.email,
        Validators.required
      ]],

      mobile: [null, [
        Validators.required
      ]],

      smscode: [null, [
        Validators.required
      ]],

      password: [null, [
        Validators.required,
        // Validators.minLength(6),
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]],

      checkPassword: [null, [
        Validators.required,
        this.confirmationValidator.bind(this),
      ]]
    });

  }


  // 自定义验证器，验证用户名是否已存在
  forbiddenNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.find(control.value) !== null) {
      // 如果在黑名单中
      return { 'namesForbidden': true };
    }
    else return null; // 不能return false
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    else return null;
  };

  updateConfirmValidator() {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  
  // 注册
  register() {
    if (this.validateForm.valid) {

      const obj = {

        username: this.validateForm.controls.userName.value,
        password: this.validateForm.controls.password.value,
        email: this.validateForm.controls.email.value,
        smscode: this.validateForm.controls.smscode.value,

      };

      this.authService.register(obj).subscribe(data => {

        if (data['code'] == '0') {
          
          this.isLogin = true;  // 注册成功即为登录成功
          sessionStorage.setItem( 'status' , this.isLogin);
          this.alertService.success('注册成功！正在跳转...');
          setTimeout(() => {
            this.router.navigate(['/admin/product-list']);
          }, 3000);
        }
        else {
          this.alertService.error(data['msg']);
        }
      });

      // for (const i in this.validateForm.controls) {
      //   this.validateForm.controls[i].markAsDirty();
      //   this.validateForm.controls[i].updateValueAndValidity();
      // }
    }
  }

  // 获取短信验证码
  getSmsCode(){

    const obj = {
      mobile: this.validateForm.controls.mobile.value,
    };

    
    this.authService.getSmsCode(obj)
    .subscribe(data => {
      console.log(data);
    });

  }

  // 测试 session 手机号是否存在
  // testSession(){

  //   const obj = {
  //     mobile: this.validateForm.controls.mobile.value,
  //   };

    
  //   this.authService.testSession(obj)
  //   .subscribe(data => {
  //     console.log(data);
  //   });
  // }
}
