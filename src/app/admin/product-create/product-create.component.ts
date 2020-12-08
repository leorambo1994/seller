import { AlertService } from './../../alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private router: Router,
    private service: ProductService,
    private alertService : AlertService
  ) {
    this.myForm = new FormGroup({
      imgUrl: new FormControl('', [Validators.required]),
      detail: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.service.createProduct(this.myForm.value).subscribe(data => {

        if (data['code'] == '0') {
          
          // 注册成功即为登录成功
          this.alertService.success('商品添加成功！正在跳转...');
          setTimeout(() => {
            // 此处应该返回到商品列表页面
            this.router.navigate(['/admin/product-list']);
          }, 3000);
        }
        else {
          this.alertService.error(data['msg']);
        }
      });
    }
  }

}
