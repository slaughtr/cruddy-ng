import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

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
    return this.db.object('/things'+thingId)
  }

  getBoxById(boxId: string) {
    return this.db.object('/boxes'+boxId)
  }

  getRoomById(roomId: string) {
    return this.db.object('/rooms'+roomId)
  }
}
