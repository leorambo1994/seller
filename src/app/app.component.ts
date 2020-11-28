import { Component } from '@angular/core';
// 导入路由事件
import {
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  Router,
  Event
} from '@angular/router';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-HTTP-Server01';

  constructor(
    private _loadingBar: SlimLoadingBarService, 
    private _router: Router ,
    ) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}
