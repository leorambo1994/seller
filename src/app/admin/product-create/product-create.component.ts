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
    private service: ProductService
  ) {
    this.myForm = new FormGroup({
      // id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      detail: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.service.createProduct(this.myForm.value).subscribe(data => {
        // 此处应该返回到商品列表页面
        this.router.navigate(['/admin/product-list']);

      });
    }
  }

}
