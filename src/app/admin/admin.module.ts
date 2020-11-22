import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { BannerCreateComponent } from './banner-create/banner-create.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerDetailComponent } from './banner-detail/banner-detail.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

// antd
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import en from '@angular/common/locales/en';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';



registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


@NgModule({
  declarations: [
    AdminComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    TopbarComponent,
    LeftbarComponent,
    BannerListComponent,
    BannerCreateComponent,
    BannerEditComponent,
    BannerDetailComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,ReactiveFormsModule,

    // antd
    DemoNgZorroAntdModule,

     // 引入图标必加此 module
    NzIconModule

  ],

  bootstrap: [ AdminComponent ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]

})
export class AdminModule { }
