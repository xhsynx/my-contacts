import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  faUser,
  faUserPlus,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/model/user";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit {
  user: User = new User();

  faUser = faUser;
  faUserPlus = faUserPlus;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  @Output() isNewUser: EventEmitter<boolean> =   new EventEmitter();
  constructor(
    private modalService: NgbModal,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content).result.then(
      () => {
     
        this.user.avatar =
          "https://robohash.org/autaperiamest.png?size=100x100&set=set1";
         
        this.firebaseService.add(this.user).then(()=>{
          this.isNewUser.emit(true);
        });
        
        this.user=new User();
      },
      () => {
        console.log("Cancel");
        this.user = new User();
      }
    );
  }
}
