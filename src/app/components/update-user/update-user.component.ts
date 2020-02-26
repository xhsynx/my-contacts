import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  faShareAlt,
  faTrash,
  faUser,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/model/user";
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.scss"]
})
export class UpdateUserComponent implements OnInit {

  updatedUser: User = new User();
  closeResult: string;
  faShareAlt = faShareAlt;
  faTrash = faTrash;
  faPen = faPen;
  faUser = faUser;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  @Input() user: User;
  constructor(private modalService: NgbModal, private firebaseService:FirebaseService) {}

  ngOnInit(): void {

  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(() => {
       this.firebaseService.update(this.user,this.updatedUser);

        },
        () => {
         console.log("Update cancelled.")
        }
      );
  }
}
