import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {QuotesComponent} from './components/pages/quotes/quotes.component';
import {WorksComponent} from './components/pages/works/works.component';
import {FormsComponent} from './components/pages/forms/forms.component';
import {GlossaryComponent} from './components/pages/glossary/glossary.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch : 'full'},
  {path: 'quotes', component: QuotesComponent},
  {path: 'works', component: WorksComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'glossary', component: GlossaryComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
