import { Component, OnInit, Input,Output,EventEmitter } from "@angular/core";
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
  faShareAlt = faShareAlt;
  faTrash = faTrash;
  faUser = faUser;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  @Input() user: User;
  constructor() {}

  ngOnInit(): void {}
  userUpdated(user:User){
    user.avatar=this.user.avatar;
   this.user=user;
  }
}
