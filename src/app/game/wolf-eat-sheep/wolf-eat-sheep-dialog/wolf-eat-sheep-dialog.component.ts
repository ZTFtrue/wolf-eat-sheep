import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

declare let screen: any;

@Component({
  selector: 'app-wolf-eat-sheep-dialog',
  templateUrl: './wolf-eat-sheep-dialog.component.html',
  styleUrls: ['./wolf-eat-sheep-dialog.component.css']
})
export class WolfEatSheepDialogComponent {

  constructor(public dialogRef: MatDialogRef<WolfEatSheepDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, translate: TranslateService) {
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

  close() {
    // this.isNoPlaying = true;
    this.dialogRef.close(false);
  }

  ok() {
    const element: any = document.documentElement;
    const _this = this;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
    screen.orientation.lock('landscape-primary').then(function (value) {
      _this.dialogRef.close(true); // play
    }, function () {
      if (navigator.userAgent.indexOf('Android') === -1) {
        _this.dialogRef.close(true); // play
      }
    });
  }
}
