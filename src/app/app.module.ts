import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { PlayersComponent } from './team-list/players/players.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'players', component: PlayersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
