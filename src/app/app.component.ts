import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // global = null;
  constructor(public translate: TranslateService) {
    let language = navigator.language;
    const languages = ['zh', 'zh-CN'];
    if (languages.includes(language)) {
      language = 'zh';
    } else {
      language = 'en';
    }
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(language);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(language);
  }

  ngOnInit() {
    console.log(
      '%c如果你不清楚你在做什么,那就不要在这里输入任何内容 ztf/true',
      'color:red;font-size:1rem;'
    );
  }
}
