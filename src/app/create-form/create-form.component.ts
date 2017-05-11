import { Component, OnInit } from '@angular/core'
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'
import { DatabaseService } from '../database.service'

import { Thing } from '../thing.model'
import { Box } from '../box.model'
import { Room } from '../room.model'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit {
  things: FirebaseListObservable<any[]>
  rooms: FirebaseListObservable<any[]>
  boxes: FirebaseListObservable<any[]>

  whichForm: string = ''

  newThingsForBox: string[] = []
  newRoomsForBox: string[] = []
  newThingsForRoom: string[] = []
  newBoxesForRoom: string[] = []

  addNewThing(name: string, size: string, box: string, room: string) {
    var newThing: Thing = new Thing(name, size, box, room)
    this.dbService.addThing(newThing)
  }

  addNewBox(name: string) {
    var newBox: Box = new Box(name, this.newRoomsForBox, this.newThingsForBox)
    this.dbService.addBox(newBox)
  }

  addNewRoom(name: string) {
    var newRoom: Room = new Room(name, this.newThingsForRoom, this.newBoxesForRoom)
    this.dbService.addRoom(newRoom)
  }

  addThingToBox(newThingForBox: string) {
    this.newThingsForBox.push(newThingForBox)
    newThingForBox = null
  }

  addRoomToBox(newRoomForBox: string) {
    this.newRoomsForBox.push(newRoomForBox)
    newRoomForBox = null
  }

  addThingToRoom(newThingForRoom: string) {
    this.newThingsForRoom.push(newThingForRoom)
    newThingForRoom = null
  }

  addBoxToRoom(newBoxForRoom: string) {
    this.newBoxesForRoom.push(newBoxForRoom)
    newBoxForRoom = null
  }

  constructor(private dbService: DatabaseService) {}

  ngOnInit() {
    this.things = this.dbService.getThings()
    this.boxes = this.dbService.getBoxes()
    this.rooms = this.dbService.getRooms()
  }

}
