import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TolstoiFirstFloorComponent } from './tolstoi-first-floor/tolstoi-first-floor.component';
import { TolstoiSecondFloorComponent } from './tolstoi-second-floor/tolstoi-second-floor.component';
import { TolstoiThirdFloorComponent } from './tolstoi-third-floor/tolstoi-third-floor.component';
import { UiComponent } from './ui/ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TourContainerComponent } from './tour-container/tour-container.component';
import { MapComponent } from './map/map.component';
import { RoomNavigationService } from './room-navigation.service';
import { TolstoiBasementComponent } from './tolstoi-basement/tolstoi-basement.component';

@NgModule({
  declarations: [
    AppComponent,
    TolstoiFirstFloorComponent,
    TolstoiSecondFloorComponent,
    TolstoiThirdFloorComponent,
    TolstoiBasementComponent,
    UiComponent,
    TourContainerComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    MatIconModule,  
    MatDividerModule,
  ],
  providers: [RoomNavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
