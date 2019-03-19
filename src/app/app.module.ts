import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatButtonToggleModule, MatDialogModule,
  MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSelectModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatCheckboxModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { WolfEatSheepComponent } from './game/wolf-eat-sheep/wolf-eat-sheep.component';
import { WolfEatSheepDialogComponent } from './game/wolf-eat-sheep/wolf-eat-sheep-dialog/wolf-eat-sheep-dialog.component';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// the second parameter 'fr' is optional
//  'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
    WolfEatSheepComponent,
    WolfEatSheepDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CommonModule,
    MatProgressBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [ WolfEatSheepDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [], // { provide: LOCALE_ID, useValue: 'zh-Hans' }
  bootstrap: [AppComponent]
})
export class AppModule { }
