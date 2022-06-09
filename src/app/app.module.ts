import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TolstoiFirstFloorComponent } from './tolstoi-first-floor/tolstoi-first-floor.component';
import { TolstoiSecondFloorComponent } from './tolstoi-second-floor/tolstoi-second-floor.component';
import { UiComponent } from './ui/ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TolstoiFirstFloorComponent,
    TolstoiSecondFloorComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
