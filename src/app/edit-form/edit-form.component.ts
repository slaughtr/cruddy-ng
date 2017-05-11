import { Component, OnInit, Input } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms"
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'
import { DatabaseService } from '../database.service'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  editThingForm: FormGroup
  editBoxForm: FormGroup
  editRoomForm: FormGroup

  constructor(private fb: FormBuilder, private dbService: DatabaseService) { }

  ngOnInit() {
  }

  getThing() {
  }

}
