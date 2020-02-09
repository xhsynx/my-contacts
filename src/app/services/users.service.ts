import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { User } from "../model/user";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  Users: User[] = [
    {
      id: 1,
      name: "Hüseyin",
      surname: "Akçiçek",
      phone: "05437677607",
      info: "Developer",
      avatar: "http://demos.themes.guide/bodeo/assets/images/users/m105.jpg"
    },
    {
      id: 1,
      name: "Hüseyin",
      surname: "Akçiçek",
      phone: "05437677607",
      info: "Developer",
      avatar: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg"
    },
    {
      id: 1,
      name: "Hüseyin",
      surname: "Akçiçek",
      phone: "05437677607",
      info: "Developer",
      avatar: "http://demos.themes.guide/bodeo/assets/images/users/m105.jpg"
    },
    {
      id: 1,
      name: "Hüseyin",
      surname: "Akçiçek",
      phone: "05437677607",
      info: "Developer",
      avatar: "http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
    }
  ];
  constructor() {}

  get() {
    return of(this.Users);
  }
}
