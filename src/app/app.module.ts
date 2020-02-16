import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FeedComponent } from "./components/feed/feed.component";
import { UserComponent } from "./components/user/user.component";
import { NavbarComponent } from "./components/custom-components/navbar/navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UpdateUserComponent } from "./components/update-user/update-user.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DeleteUserComponent } from "./components/delete-user/delete-user.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { ShareUserComponent } from "./components/share-user/share-user.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    UserComponent,
    NavbarComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AddUserComponent,
    ShareUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
