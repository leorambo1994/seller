最重要Tip: 想要成功引入 NgZorroAntdModule 模块，必须自己建立一个ng-zorro-antd.module.ts 文件 ，并在 app.module.ts 中 imports，
          否则所有样式不会生效！切记！

# 应用场景： 删除一个商品
   在商品列表的页面，点击删除按钮，完成删除，不需要路由的跳转
   在删除之前，需要用户确认是否真的删除。

# 实现的思路：
   删除商品之前，要获取到商品的 id ；  删除之后，还要刷新商品列表页面
   对话框是有讲究的。 modal popup （模态对话框）： 可以使用 Modal 在当前页面“正中” 打开一个浮层 （popup），承载相应的操作。
   
#具体实现：

 product-list.component.html 操作

 通过对 products 的 filter 操作， 刷新数据，从而刷新页面；

 如何添加一个对话框？

 alert, 仅仅提示还不过，还得判断用户的操作行为， 点击的是确认还是取消呢 ？


# 知识点：

  bootstrap 干什么的 ？  单纯的布局和样式， bootstrap 有 alert 弹出框 

  如何判断 它的 确认 和取消 ？  bootstrap 没有给出来

  bootstrap of angular / react ?   比如： ng-bootstrap  
    里面有 angular API （代码） 

  ant design of angular  / react  

#  安装 ant design ： ng-zorro 参考官方文档 

 >  npm install ng-zorro-antd --save

   在 angular.json 文件中配置 css、 assets

# 引用 ant design modal popup

 1.  引入NzModalService
 2.  注入： NzModalService
 3.  调用：  showConfirm(): void

知识点： 读懂它的回调函数 

   nzOnOk      : () => console.log('OK'),

   在它的箭头函数中，添加你的代码。

  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle     : 'Are you sure delete this task?',
      nzContent   : '<b style="color: red;">Some descriptions</b>',
      nzOkText    : 'Yes',
      nzOkType    : 'danger',
      nzOnOk      : () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel  : () => console.log('Cancel')
    });
  }
}

#  添加 login  和 register 组件

  1. 创建 组件 register
  2. 路由配置  app-routing.module.ts 
  
  register 实现方法：
   
   copy  ant design 里面的 register 组件
   

# 应用场景： 如何添加一个路由的进度条？

#实现思路： 查找 Angular (node.js ) 的官方组件，  npmjs.com 

# 实现方法：

  1.  安装 module：
  > npm install ng2-slim-loading-bar --save

  2. 搭桥指令， 目的： 让 Angular 6 与 第三方模块对接
    >  npm i rxjs-compat --save

  3.  在app.module.ts中  导入 module （ng2-slim-loading-bar）

  4.  导入它的 css  // styles.css

  5.  添加路由  app.component.html  ， 加在首行位置
      把  <ng2-slim-loading-bar>  当做一条指令（directive ）来使用
 
  6. 加入路由事件  app.component.ts 

     （1）导入service： 

      import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

     （2） 注入service

       constructor ( private service: SlimLoadingBarService  ) {}

      NavigationStart
      NavigationEndy
      NavigationError
      NavigationCancel
      Router
      Event

【小结】：
  当需要第三方插件时， 到哪里去找？  建议： npmjs.com (官网)


Tips: 想要 <alert></alert> 生效并避免错误，一定要在 alert.component.ts 中引入
      import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';  











        