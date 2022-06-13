import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  currentFloorMapUrl: string = '/assets/Tolstoi/testmap.png';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const image = document.getElementById('map-image');
    if (image == null) {
      console.log('Image could not be loaded.');
      return;
    }
    console.log(image);
    console.log(image.offsetHeight);
    console.log(image.offsetWidth);

    for (let i = 0; i < 10; i++) {
      this.placeCoordinate(Math.random() * image.offsetWidth, Math.random() * image.offsetHeight);
    }


  }

  get currentFloorMap(): string {
    return this.currentFloorMapUrl;
  }

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
    newImage.setAttribute('class', 'overlays');
    newImage.style.left = l + "px";
    newImage.style.top = t + "px";
    document.getElementById('map-container')?.appendChild(newImage);
  }

}
