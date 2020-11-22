import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http : HttpClient ) { }

  baseUrl : string = "http://localhost:3000/banners";

  // get 获取轮播列表

  getBanners(){
    return this.http.get(this.baseUrl);
  }

  // get 获取指定轮播图

  getBannertById(id){
    return this.http.get(this.baseUrl + '/' + id);
  }
  
  // 创建轮播图

  createBanner( obj ){
    return this.http.post(this.baseUrl , obj);
  }

  // 修改轮播图

  updateBanner( id , obj ){
    return this.http.put(this.baseUrl + '/' + id , obj );
  }

  // 删除指定轮播图

  deleteBanner( id ){
    return this.http.delete(this.baseUrl + '/' + id);
  }
   
  // 以上所有的返回都是一个对象，Observable
}
