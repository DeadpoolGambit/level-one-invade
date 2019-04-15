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

  ngOnInit() {
  }

  findSummoner(summonerName) {
    this.http.get('http://127.0.0.1:8080/summoner/' + summonerName).subscribe(data => {
      var serverData = data as JSON;
      console.log(serverData);
    });
  }
}
