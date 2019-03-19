import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // global = null;

  ngOnInit() {
    console.log(
      '%c如果你不清楚你在做什么,那就不要在这里输入任何内容',
      'color:red;font-size:3rem;'
    );
  }
}
