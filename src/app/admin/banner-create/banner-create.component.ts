import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BannerService } from './../banner.service';

@Component({
  selector: 'app-banner-create',
  templateUrl: './banner-create.component.html',
  styleUrls: ['./banner-create.component.css']
})
export class BannerCreateComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private router: Router,
    private bannerService: BannerService
  ) {
    this.myForm = new FormGroup({

      name: new FormControl('', [Validators.required]),
      imageFeaturedUrl: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.bannerService.createBanner(this.myForm.value).subscribe(data => {
        // 此处应该返回到商品列表页面
        this.router.navigate(['/admin/banner-list']);

      });
    }
  }


}
