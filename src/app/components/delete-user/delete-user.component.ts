import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/model/user";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-delete-user",
  templateUrl: "./delete-user.component.html",
  styleUrls: ["./delete-user.component.scss"]
})
export class DeleteUserComponent implements OnInit {
  closeResult: string;
  faTrash = faTrash;
  @Input() user: User;
  constructor(
    private modalService: NgbModal,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {}
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(() => {
        this.firebaseService.remove(this.user.id);
      });
  }
}
