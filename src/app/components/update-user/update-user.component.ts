import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  faShareAlt,
  faTrash,
  faEdit,
  faUser,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPen
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.scss"]
})
export class UpdateUserComponent implements OnInit {
  closeResult: string;
  faShareAlt = faShareAlt;
  faTrash = faTrash;
  faPen = faPen;
  faUser = faUser;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
