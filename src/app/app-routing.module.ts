import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WolfEatSheepComponent } from './wolf-eat-sheep/wolf-eat-sheep.component';
import { WolfEatSheepHelpComponent } from './wolf-eat-sheep-help/wolf-eat-sheep-help.component';


const routes: Routes = [
  { path: '', redirectTo: '/wolf-eat-sheep', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'wolf-eat-sheep', component: WolfEatSheepComponent },
      { path: 'help', component: WolfEatSheepHelpComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false, useHash: true } // <-- debugging purposes only
 // <-- debugging purposes only
      // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
