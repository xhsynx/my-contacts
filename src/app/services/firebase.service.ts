import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { User } from "../model/user";
import { AngularFireDatabase, snapshotChanges } from "@angular/fire/database";
import "firebase/database";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  users: Array<User> = [];
  childrenCount: number;
  constructor(private firebase: AngularFireDatabase) {}

  getChildrenCount() {
    var ref = this.firebase.database.ref("/root/contacts/");
    ref.once("value").then(snapshot => {
      this.childrenCount = snapshot.numChildren();
    });
    return this.childrenCount;
  }
  get() {
    var ref = this.firebase.database.ref("/root/contacts/");
    ref.once("value").then(snapshot => {
      if (snapshot.val() !== null) {
        Object.keys(snapshot.val()).map(i => {
          this.users.push(snapshot.val()[i]);
        });
      }
    });
    return of(this.users);
  }
  add(user: User) {
    this.getChildrenCount() === undefined
      ? (user.id = 0)
      : (user.id = this.getChildrenCount());
    this.firebase.database
      .ref("/root/contacts/")
      .push(user)
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
    this.get();
  }
  remove(id: number) {
    var ref = this.firebase.database.ref("/root/");
    ref
      .child("contacts")
      .orderByChild("id")
      .equalTo(id)
      .on("value", function(snapshot) {
        ref.child("/contacts/" + Object.keys(snapshot.val())[0]).remove();
      });

    return this.users;
  }
}
