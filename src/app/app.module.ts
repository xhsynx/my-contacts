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
import { FilterPipe } from "./pipes/filter.pipe";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    UserComponent,
    NavbarComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AddUserComponent,
    ShareUserComponent,
    FilterPipe,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
