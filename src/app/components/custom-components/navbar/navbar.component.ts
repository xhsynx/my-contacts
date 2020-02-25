import { Component, OnInit, Input } from "@angular/core";
import { faUserPlus, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/model/user";
import { FirebaseService } from "src/app/services/firebase.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  users: User[];
  faUserPlus = faUserPlus;
  faMobileAlt = faMobileAlt;
  searchTerm?: string;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.get().subscribe(users => {
      this.users = users;
    });
  }
}
