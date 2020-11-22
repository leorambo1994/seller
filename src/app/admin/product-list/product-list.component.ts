import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { NzModalService } from "ng-zorro-antd/modal";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : any = [];

  constructor(
    private modal: NzModalService,
    private router: Router,
    private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
        console.log("获取到商品：", this.products);
      })
  }

  // 删除商品
  deleteProduct(id) {

    // 弹出对话框modal popup
    this.modal.confirm({
      nzTitle: '删除此商品？',
      nzContent: '<b style="color: red;">确定删除？</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {
        console.log('OK');

        this.productService.deleteProduct(id).subscribe(data => {
          this.router.navigate(['/admin/product-list']);

          // 刷新商品列表，刷新数据
          this.products = this.products.filter(product =>
            product._id !== id
          );
        });
        
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });

  }

}
