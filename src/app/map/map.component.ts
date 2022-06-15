import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  currentFloorMapUrl: string = '';
  currentBuilding = '';
  currentFloor = -1; // -1 = undefined floor

  tolstoiFirstFloorMapUrl: string = '/assets/Tolstoi/1.korrus/1korruskaart.jpg';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.currentBuilding = data['currentBuilding'];
      this.currentFloor = data['currentFloor'];
      console.log('Entered building ' + this.currentBuilding);
    });
  }

  public setupCurrentFloorMap(): void {
    if (this.currentBuilding == 'tolstoi') {
      switch (this.currentFloor) {
        case 1:
          this.currentFloorMapUrl = this.tolstoiFirstFloorMapUrl;
      }
    }
  }

  get currentFloorMap(): string {
    return this.currentFloorMapUrl;
  }

  // Places a clickable dot on the minimap
  public placeCoordinate(offX: number, offY: number): void {

    const image = document.getElementById('map-image');
    const margin = 0;

    if (image == null) {
      console.log('Image could not be loaded.');
      return;
    }

    let l: number = image.offsetLeft;
    let t: number = image.offsetTop;

    if (l == null || t == null) {
      console.error("Could not find image offsets");
      return;
    }

    if (offX > margin) offX -= margin;
    if( offY > margin) offY -= margin;

    l += offX;
    t += offY;

    const newImage = document.createElement("img");
    newImage.setAttribute('src', '/assets/dot.png');
    newImage.style.position = "absolute";
    newImage.style.left = l + "px";
    newImage.style.top = t + "px";
    document.getElementById('map-container')?.prepend(newImage);
  }

}
