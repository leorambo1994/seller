import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {

  banners : any = [];

  constructor(
    private modal: NzModalService,
    private router: Router,
    private bannerService: BannerService) {

  }

  ngOnInit(): void {
    this.bannerService.getBanners()
      .subscribe(data => {
        this.banners = data;
        console.log("获取到轮播图：", this.banners);
      })
  }

  // 编辑轮播图
  // editBanner(product: Product) {

  //   localStorage.removeItem("key_edit_banner");
  //   localStorage.setItem("key_edit_banner",banner.id.toString());
  //   this.router.navigate(['banner-edit']);
  // }

  // 删除轮播图
  deleteBanner(id) {

    // 弹出对话框modal popup
    this.modal.confirm({
      nzTitle: '删除此轮播图？',
      nzContent: '<b style="color: red;">确定删除？</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        console.log('OK');

        this.bannerService.deleteBanner(id).subscribe(data => {
          this.router.navigate(['/admin/banner-list']);

          // 刷新轮播图列表，刷新数据
          this.banners = this.banners.filter(product =>
            product._id !== id
          );
        });
        
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });

  }

}
