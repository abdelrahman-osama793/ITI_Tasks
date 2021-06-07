import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './Components/user-table/user-table.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';
import { UserDisplayComponent } from './Components/user-display/user-display.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ErrorComponent } from './Components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDisplayComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
