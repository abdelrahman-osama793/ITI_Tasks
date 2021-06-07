import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserDisplayComponent } from './Components/user-display/user-display.component';
import { UserTableComponent } from './Components/user-table/user-table.component';

const routes: Routes = [
  {path:'', redirectTo:'users',pathMatch:'full'},
  {path:'users', component: UserTableComponent},
  {path:'users/:id', component: UserDisplayComponent},
  {path:'addUser', component: UserAddComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
