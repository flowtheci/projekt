import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourContainerComponent } from './tour-container/tour-container.component';
import { UiComponent } from './ui/ui.component';
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  {path: 'tolstoi', component: TourContainerComponent, data: {floor: 1}},
  {path: 'tolstoi2', component: TourContainerComponent, data: {floor: 2}},
  {path: 'tolstoi3', component: TourContainerComponent, data: {floor: 3}},
  {path: 'tolstoi0', component: TourContainerComponent, data: {floor: 0}},
  {path: '', component: UiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
