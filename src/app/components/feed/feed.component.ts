import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"]
})
export class FeedComponent implements OnInit {
  active: number;
  constructor() {}

  ngOnInit(): void {
    this.active = 1;
  }
}
