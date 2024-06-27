import { Component } from '@angular/core';
import { User } from '../model/user.models';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule],
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

 addUser(){
  
    this.isFormShowable=false;
    const newUser = new User(this.tempUser.name, this.tempUser.familyName, +this.tempUser.age);;
   
    this.Users.push(newUser);
    this.tempUser.clear();
 }

 isFormShowable:boolean=false;
 showForm=()=>this.isFormShowable=true;
 hideForm=()=>this.isFormShowable=false;
 

}
