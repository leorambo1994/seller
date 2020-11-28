import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { BannerCreateComponent } from './banner-create/banner-create.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerDetailComponent } from './banner-detail/banner-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [

      {
        path: '',
        redirectTo: "product-list",   // 当访问路径是 /admin/时，显示 product-list
        pathMatch: 'full',
      },

      { path: 'banner-list', component: BannerListComponent },
      { path: 'banner-create', component: BannerCreateComponent },
      { path: 'banner-edit/:id', component: BannerEditComponent },
      { path: 'banner-detail', component: BannerDetailComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-create', component: ProductCreateComponent },
      { path: 'product-edit/:id' , component : ProductEditComponent  },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-register', component: UserRegisterComponent },
      { path: 'user-edit/:id', component: UserEditComponent },
      { path: 'user-detail', component: UserDetailComponent },
      // { path: '../admin', component: ProductListComponent },
      { path: '**', component: ProductListComponent }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
