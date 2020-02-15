import { Component, OnInit } from "@angular/core";
import { faUserPlus, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  faUserPlus = faUserPlus;
  faMobileAlt = faMobileAlt;
  constructor() {}

  ngOnInit(): void {}
}
