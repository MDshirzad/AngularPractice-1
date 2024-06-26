import { Component } from '@angular/core';
import { User } from '../model/user.models';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
 Users :  User[];
 tempUser :  User;
 
 constructor() {
  this.Users=[
    new User("Ali","Mohamadi",19),
    new User("Hosseing","Ahmadi",28)
  ]
  this.tempUser = new User("","",0);
 }
 
}
