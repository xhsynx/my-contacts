import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user";
import { UsersService } from "src/app/services/users.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    console.log("ok");
    this.userService.get().subscribe(res => {
      this.users = res;
    });
  }
}
