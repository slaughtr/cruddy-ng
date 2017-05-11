import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DatabaseService } from '../database.service'


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  things: FirebaseListObservable<any[]>
  rooms: FirebaseListObservable<any[]>
  boxes: FirebaseListObservable<any[]>

  constructor(private dbService: DatabaseService) {}

  ngOnInit() {
    this.things = this.dbService.getThings()
    this.boxes = this.dbService.getBoxes()
    this.rooms = this.dbService.getRooms()
  }

}
