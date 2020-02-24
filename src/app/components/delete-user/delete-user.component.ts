import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/model/user";
import { UsersService } from "src/app/services/users.service";

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
    private userService: UsersService
  ) {}

  ngOnInit(): void {}
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(() => {
        this.userService.remove(this.user.id);
      });
  }
}
