import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SideContainerComponent } from './components/side-container/side-container.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { NavBarHeavyComponent } from './components/nav-bar-heavy/nav-bar-heavy.component';

@NgModule({
  declarations: [
    AppComponent,
    SideContainerComponent,
    WelcomeBannerComponent,
    NavBarHeavyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
