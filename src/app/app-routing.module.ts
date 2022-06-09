import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TolstoiFirstFloorComponent } from './tolstoi-first-floor/tolstoi-first-floor.component';
import { TolstoiSecondFloorComponent } from './tolstoi-second-floor/tolstoi-second-floor.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {path: 'tolstoi-1-korrus', component: TolstoiFirstFloorComponent},
  {path: 'tolstoi-2-korrus', component: TolstoiSecondFloorComponent},
  {path: '', component: UiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
