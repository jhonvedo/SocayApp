import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';
import { RouteHandlerModule } from './core/route-handler/route-handler.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingsService } from './core/settings/settings.service';
import { BarRatingModule } from "ngx-bar-rating";
import { Ng2Timeline } from 'ng2-timeline';
// import { StarRatingModule } from '@angular-star-rating-lib/angular-star-rating';
import { StarRatingModule } from 'angular-star-rating';
import { RatingModule } from 'ng2-pure-rating/dist';
import { TimeLineModule } from './core/time-line/time-line.module';
 
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'elastic-ui' }),
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),

    BarRatingModule,
    StarRatingModule.forRoot(),
    Ng2Timeline,
    RatingModule,
    TimeLineModule,
   
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    AppRoutingModule,
    CoreModule,
    PagesModule,
    RouteHandlerModule
   
  ],
  providers: [SettingsService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
