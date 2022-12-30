import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsData } from '../wolf-eat-sheep/wolf-eat-sheep.component';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SettingsData,
  ) {



  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  postiveClick(): void {
    localStorage.setItem('defaultSettings', JSON.stringify(this.data));
    this.dialogRef.close(this.data);
  }
}
