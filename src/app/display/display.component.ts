import { Component, OnInit, Output } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DatabaseService } from '../database.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  // @Output() editThingSender = new EventEmitter()
  // @Output() editBoxSender = new EventEmitter()
  // @Output() editRoomSender = new EventEmitter()
  //
  // editThing(thingToEdit: Thing) {
  //   this.editThingSender.emit(thingToEdit)
  // }
  //
  // editBox(boxToEdit: Box) {
  //   this.editBoxSender.emit(boxToEdit)
  // }
  //
  // editRoom(roomToEdit: Room) {
  //   this.editRoomSender.emit(roomToEdit)
  // }

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
