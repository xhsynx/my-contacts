import { Component, OnInit, Input } from "@angular/core";
import { faUserPlus, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/model/user";
import { UsersService } from "src/app/services/users.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  users: User[];
  faUserPlus = faUserPlus;
  faMobileAlt = faMobileAlt;
  searchTerm: string;
  @Input() user: User;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.get().subscribe(res => {
      this.users = res;
    });
  }
}
