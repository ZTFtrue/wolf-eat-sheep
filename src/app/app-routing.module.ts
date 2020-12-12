import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WolfEatSheepComponent } from './game/wolf-eat-sheep/wolf-eat-sheep.component';


const routes: Routes = [
  { path: '', redirectTo: '/wolf-eat-sheep', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'wolf-eat-sheep', component: WolfEatSheepComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false, useHash: true, relativeLinkResolution: 'legacy' } // <-- debugging purposes only
      // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
