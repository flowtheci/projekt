import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourContainerComponent } from './tour-container/tour-container.component';
import { UiComponent } from './ui/ui.component';
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  {path: 'tolstoi', component: TourContainerComponent, data: {building: 'tolstoi'}},
  {path: 'building2', component: TourContainerComponent, data: {building: 'teine'}},
  {path: 'mapTest', component: MapComponent, data: {currentBuilding: 'tolstoi', currentFloor: 1}},
  {path: '', component: UiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
