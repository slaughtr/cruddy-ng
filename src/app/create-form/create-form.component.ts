import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DatabaseService } from '../database.service'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit {
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
