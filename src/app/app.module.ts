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
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import {RouterModule} from '@angular/router';
import { QuotesComponent } from './components/pages/quotes/quotes.component';
import { GlossaryComponent } from './components/pages/glossary/glossary.component';
import { WorksComponent } from './components/pages/works/works.component';
import { FormsComponent } from './components/pages/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SideContainerComponent,
    WelcomeBannerComponent,
    NavBarHeavyComponent,
    FooterComponent,
    HomeComponent,
    QuotesComponent,
    GlossaryComponent,
    WorksComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
