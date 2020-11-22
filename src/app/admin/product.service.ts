import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient ) { }

  baseUrl : string = "http://localhost:3000/products";

  // get 获取商品列表，<Product[]> 表示后台返回一个数组，数组类型是 Product[];

  getProducts(){
    return this.http.get(this.baseUrl);
  }

  // get 获取指定商品

  getProductById(id){
    return this.http.get(this.baseUrl + '/' + id);
  }
  
  // 创建商品

  createProduct( obj ){
    return this.http.post(this.baseUrl , obj);
  }

  // 修改商品b 

  updateProduct( id , obj ){
    return this.http.put(this.baseUrl + '/' + id , obj );
  }

  // 删除指定商品

  deleteProduct( id ){
    return this.http.delete(this.baseUrl + '/' + id);
  }
  // 以上所有的返回都是一个对象，Observable
}
