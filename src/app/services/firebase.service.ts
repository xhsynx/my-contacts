import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { User } from "../model/user";
import { AngularFireDatabase, snapshotChanges } from "@angular/fire/database";
import "firebase/database";
@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  users: Array<User> = [];
  childrenCount: number;
  constructor(private firebase: AngularFireDatabase) {}

  async getChildrenCount() {
    const ref = this.firebase.database.ref("/root/contacts/");
  await  ref.once("value").then(snapshot => {
      this.childrenCount = snapshot.numChildren();
    });
  }
  get() {
    var ref = this.firebase.database.ref("/root/contacts/");
    ref.once("value").then(snapshot => {
      if (snapshot.val() !== null) {
        this.users.splice(0,this.users.length)
        Object.keys(snapshot.val()).map(i => {
          this.users.push(snapshot.val()[i]);
        });
      }
      else{
        this.users.splice(0,this.users.length)
      }
    });
    console.log(this.users)
    return of(this.users);
  }
  async add(user: User) {
   await this.getChildrenCount();
    this.childrenCount === undefined
      ? (user.id = 0)
      : (user.id = this.childrenCount);
  
    this.firebase.database
      .ref("/root/contacts/")
      .push(user)
      .then(() => {
        console.log("Contact is added successfully");
      })
      .catch(error => {
        console.log(error);
      });
  }
  remove(user: User) {
    var ref = this.firebase.database.ref("/root/");
  ref
    .child("contacts")
    .orderByChild("id")
    .equalTo(user.id)
    .once("value",(snapshot)=>{
      if( snapshot.val() !==undefined){
        ref.child("/contacts/" + Object.keys(snapshot.val())[0]).remove();
      }
    });
  }
  update(prevUser: User, updatedUser:User) {
    var ref = this.firebase.database.ref("/root/");
  ref
    .child("contacts")
    .orderByChild("id")
    .equalTo(prevUser.id)
    .once("value",(snapshot)=>{
     
      if( snapshot.val() !==undefined){
        ref.child("/contacts/" + Object.keys(snapshot.val())[0]).update({
          id:prevUser.id,
          avatar:prevUser.avatar,
          name:updatedUser.name,
          phone:updatedUser.phone,
          email:updatedUser.email
        });
      }
    });
  }
}
