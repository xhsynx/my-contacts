import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { User } from "../model/user";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  Users: User[] = [
    {
      id: 1,
      name: "Janot Brinson",
      phone: "958-535-9482",
      email: "jbrinson0@amazon.co.jp",
      avatar:
        "https://robohash.org/aliquammolestiaemaiores.jpg?size=100x100&set=set1"
    },
    {
      id: 98,
      name: "Fionnula Tapner",
      phone: "341-699-3973",
      email: "ftapner2p@facebook.com",
      avatar: "https://robohash.org/exquamporro.bmp?size=100x100&set=set1"
    },
    {
      id: 99,
      name: "Chance Mularkey",
      phone: "306-802-2143",
      email: "cmularkey2q@google.it",
      avatar: "https://robohash.org/autquinostrum.bmp?size=100x100&set=set1"
    },
    {
      id: 100,
      name: "Bink Sherewood",
      phone: "366-745-0106",
      email: "bsherewood2r@un.org",
      avatar: "https://robohash.org/autaperiamest.png?size=100x100&set=set1"
    }
  ];
  constructor() {}

  get() {
    return of(this.Users);
  }
  add(user: User) {
    return of(this.Users.push(user));
  }
  remove(id: number) {
    for (var i = 0; i < this.Users.length; i++) {
      if (this.Users[i].id === id) {
        this.Users.splice(i, 1);
      }
    }
    return this.Users;
  }
}
