import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  faUser,
  faUserPlus,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/user';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit {

  user: User =new User();

  faUser = faUser;
  faUserPlus = faUserPlus;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  constructor(private modalService: NgbModal,private userService:UsersService) {  }

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content).result.then(()=>{
      this.user.avatar="https://robohash.org/autaperiamest.png?size=100x100&set=set1";
      this.userService.add(this.user);
    });
  }

}
