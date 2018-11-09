import {Component, Input, OnInit} from '@angular/core';
import { TeamMembers } from '../../teammember';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  title = 'Players';
  teammembers = TeamMembers;

  constructor() { }

  ngOnInit() {
  }

}
