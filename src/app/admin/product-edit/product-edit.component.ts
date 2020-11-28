import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // myForm : FormGroup;

  product : any = {};  // 代表一个商品，是一个商品对象

  constructor( 
    private router : Router ,
    private route : ActivatedRoute ,
    private productService : ProductService ) { 

   
  }

  ngOnInit(): void {

    // 根据商品id, 获取商品详情
    this.route.params.subscribe( params => {
      this.productService.getProductById( params['id'] ).subscribe( data => {
        this.product = data;
        console.log('商品详情：' , this.product);
      });
    });

    // this.myForm = new FormGroup({
    //   id : new FormControl('' , [Validators.required]),
    //   title : new FormControl('' , [Validators.required]),
    //   detail : new FormControl('' , [Validators.required]),
    //   price : new FormControl('' , [Validators.required])
    // });

  }

  updateProduct(){

    const obj = {
      imgUrl : this.product.imgUrl,
      detail : this.product.detail,
      price : this.product.price,
    };

    this.route.params.subscribe( parmas => {
      this.productService.updateProduct( parmas['id'] , obj ).subscribe( data => {  // 一定要调用 subscribe ， 才会发起网络请求
        this.router.navigate(['/admin/product-list']);
      });
    });
  }
}
