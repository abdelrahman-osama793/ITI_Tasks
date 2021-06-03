import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterationCompComponent } from './registeration-comp/registeration-comp.component';
import { TableCompComponent } from './table-comp/table-comp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorCompComponent } from './error-comp/error-comp.component';
import { DetailsCompComponent } from './details-comp/details-comp.component';
import { AppServiceService } from './Services/app-service.service';
import { CustomDDirective } from './Directives/custom-d.directive';
import { CustomPPipe } from './Pipes/custom-p.pipe';


const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'anime', component: RegisterationCompComponent },
  { path: 'animeTable', component: TableCompComponent },
  { path: 'animeTable/:id', component: DetailsCompComponent },
  { path: '**', component: ErrorCompComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterationCompComponent,
    TableCompComponent,
    NavbarComponent,
    CarouselComponent,
    ErrorCompComponent,
    DetailsCompComponent,
    CustomDDirective,
    CustomPPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AppServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
