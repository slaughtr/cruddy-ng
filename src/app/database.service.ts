import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import { Thing } from './thing.model'
import { Box } from './box.model'
import { Room } from './room.model'

@Injectable()
export class DatabaseService {
  things: FirebaseListObservable<any[]>
  rooms: FirebaseListObservable<any[]>
  boxes: FirebaseListObservable<any[]>

  constructor(private db: AngularFireDatabase) {
    this.things = db.list('/things')
    this.boxes = db.list('/boxes')
    this.rooms = db.list('/rooms')
  }

  addThing(newThing: Thing) {
    this.things.push(newThing)
  }

  addBox(newBox: Box) {
    this.boxes.push(newBox)
  }

  addRoom(newRoom: Room) {
    this.rooms.push(newRoom)
  }

  getThings()  {
    return this.things
  }

  getBoxes()  {
    return this.boxes
  }

  getRooms() {
    return this.rooms
  }

  getThingById(thingId: string) {
    return this.db.object('/things/'+thingId)
  }

  getBoxById(boxId: string) {
    return this.db.object('/boxes/'+boxId)
  }

  getRoomById(roomId: string) {
    return this.db.object('/rooms/'+roomId)
  }

  findBoxes(box) {
    if (box) return this.getBoxById(box)
  }

  findRooms(room) {
    if (room) return this.getRoomById(room)
  }

  findThings(thing) {
    if (thing) return this.getThingById(thing)
  }
}
