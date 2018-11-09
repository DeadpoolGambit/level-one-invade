import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamMembers } from '../teammember';
import {PlayersComponent} from './players/players.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  entryComponents: [PlayersComponent]
})

export class TeamListComponent implements OnInit {

  teammembers = TeamMembers;
  summonerName = 'DeadpoolGambit';

  constructor(private http: HttpClient) { }

  // fill in the url with whatever you want to call plus your dev api key
  url = '';
  // need to fix issue with access control origin policy
  // currently can't request riot api because it's different origin than localhost (obviously)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  ngOnInit() {
  }

  findSummoner(name: string): any {
    console.log(this.httpOptions);
    const response = this.http.request('GET', this.url, this.httpOptions).subscribe(
      data => {
        console.log('Get Request is successful ', data);
    });
    alert(name);
  }
}
