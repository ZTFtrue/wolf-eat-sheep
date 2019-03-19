import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'ztftrue';
  currentRouterIndex = 0;
  menuStatus = true;
  menuData = [];
  userEmail;
  session;
  disabledButton = false;
  constructor() { }
  getMenu() {
    // 获取菜单时,验证头是否需要刷新
  }
  ngOnInit() {
  }
}
