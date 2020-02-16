import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user";
import { UsersService } from "src/app/services/users.service";
import {
  faShareAlt,
  faTrash,
  faUser,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users: User[];
  faShareAlt = faShareAlt;
  faTrash = faTrash;
  faUser = faUser;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    console.log("ok");
    this.userService.get().subscribe(res => {
      this.users = res;
    });
  }
}
