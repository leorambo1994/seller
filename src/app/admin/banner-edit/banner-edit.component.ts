import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {

  banner : any = {}; // 代表一个轮播
  constructor(
    private router : Router,
    private bannerService : BannerService,
    private route : ActivatedRoute
  ) {

  }

  ngOnInit(): void {
       // 根据商品id, 获取商品详情
    this.route.params.subscribe( params => {
      this.bannerService.getBannertById( params['id'] ).subscribe( data => {
        this.banner = data;
        console.log('轮播图：' , this.banner);
      });
    });
  }
  updateBanner(){

    const obj = {
      name : this.banner.name,
      imageFeaturedUrl : this.banner.imageFeaturedUrl,
    };

    this.route.params.subscribe( parmas => {
      this.bannerService.updateBanner( parmas['id'] , obj ).subscribe( data => {  // 一定要调用 subscribe ， 才会发起网络请求
        this.router.navigate(['/admin/banner-list']);
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
