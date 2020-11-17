import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
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
    
    // var product_id : number;

    // this.myForm = new FormGroup({
    //   id : new FormControl('' , [Validators.required]),
    //   title : new FormControl('' , [Validators.required]),
    //   detail : new FormControl('' , [Validators.required]),
    //   price : new FormControl('' , [Validators.required])
    // });

    // 获取商品id , 方法一
    // this.route.params.subscribe( params =>{
    //   product_id = params.id;
    // });

    // 获取商品id , 方法二, 通过参数查询
    // this.route.queryParams.subscribe( params =>{
    //   product_id = params.id;
    // });

    // 获取商品id , 方法三, 通过snapshot
    // product_id = this.route.snapshot.queryParams['id'];

    // 获取商品id , 方法四, 通过localStorage
    // 需要类型转换，存储的 字符串-> number;
    // 根据商品id, 获取商品详情,通过 + strId 实现 string -> number;

    // var strId : string;
    // strId = localStorage.getItem("key_edit_product");

    // this.productService.getProductById( + strId ).subscribe(data => {
    //   this.myForm.setValue(data);  // 刷新页面
    // });
  }

    // 根据商品id, 获取商品详情
  //   this.service.getProductById(product_id).subscribe(data => {
  //     this.myForm.setValue(data);  // 刷新页面
  //   });
  // }

  // onSubmit(){
  //   if (this.myForm.valid) {
  //     this.service.updateProduct(this.myForm.value).subscribe( data => {
  //       // 此处应该返回到商品列表页面
  //       this.router.navigate(['product-list']);
        
  //     });
  //   }
  // }

  updateProduct(){

    const obj = {
      title : this.product.title,
      detail : this.product.detail,
      price : this.product.price,
    };

    this.route.params.subscribe( parmas => {
      this.productService.updateProduct( parmas['id'] , obj ).subscribe( data => {  // 一定要调用 subscribe ， 才会发起网络请求
        this.router.navigate(['/admin/product-list']);
      });
    });

    // if (this.myForm.valid) {
    //   this.productService.updateProduct(this.myForm.value).subscribe( data => {
    //     // 此处应该返回到商品列表页面
    //     this.router.navigate(['product-list']);
        
    //   });
    // }
  }

}
