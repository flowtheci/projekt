import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { v4 as uuidv4 } from 'uuid';
import * as $ from 'jquery';
import { RoomNavigationService } from '../room-navigation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  currentFloorMapUrl: string = '';
  @Input() currentBuilding = '';
  @Input() currentFloor = -1; // -1 = undefined floor
  @Input() set selectedRoom(room: string) {
    this.selectRoomById(room);
  }

  addedPoints = 0;
  tolstoiFirstFloorMapUrl: string = './assets/Tolstoi/1.korrus/1korruskaart.jpg';
  tolstoiSecondFloorMapUrl: string = './assets/Tolstoi/2korrus/2korruskaart.jpg';

  constructor(private route: ActivatedRoute, private roomService: RoomNavigationService) { 
  }

  ngOnInit(): void {
    console.log('Entered building ' + this.currentBuilding);
    if (this.currentBuilding == '') {
      this.currentBuilding = 'tolstoi';
      this.currentFloor = 1;
    }
    this.setupCurrentFloorMap();

    $('.dot').on('click', (evt) => {
      this.selectRoom(evt);
    });
    $(".map-image").on("click", function(event) {
      var x = event.pageX - this.offsetLeft - 15;
      var y = event.pageY - this.offsetTop - 65;
      console.log("X Coordinate: " + x + " Y Coordinate: " + y);
  });
  }

  public setupCurrentFloorMap(): void {
    console.log(this.currentBuilding + this.currentFloor)
    if (this.currentBuilding == 'tolstoi' || this.currentBuilding == 'teine') {
      switch (this.currentFloor) {
        case 1:
          this.currentFloorMapUrl = this.tolstoiFirstFloorMapUrl;
          this.createTolstoiFirstFloorPoints();
          break;
        case 2:
          this.currentFloorMapUrl = this.tolstoiSecondFloorMapUrl;
          this.createTolstoiSecondFloorPoints();
          break;
      }
    }
  }

  get currentFloorMap(): string {
    return this.currentFloorMapUrl;
  }

  public createTolstoiFirstFloorPoints() {
    this.placeCoordinate(470, 452, "entrancePano");
    this.placeCoordinate(470, 400, "lobbyPano1");
    this.placeCoordinate(400, 400, "lobbyPano2");
    this.placeCoordinate(395, 310, "lobbyPano5");
  }

  public createTolstoiSecondFloorPoints() {
    
  }

  // Places a clickable dot on the minimap
  // First added dot is shown as starting point by default
  public placeCoordinate(offX: number, offY: number, roomName: string): void {

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
    if (offY > margin) offY -= margin;

    l += offX;
    t += offY;


    const newImage = document.createElement("img");
    newImage.setAttribute('src', this.addedPoints == 0 ? '/assets/dot-here.png' : '/assets/dot.png');
    newImage.classList.add("dot");
    newImage.style.position = "absolute";
    newImage.style.cursor = "pointer";
    newImage.style.left = l + "px";
    newImage.style.top = t + "px";
    newImage.id = roomName;
    document.getElementById('map-container')?.prepend(newImage);
    this.addedPoints++;
  }

  public selectRoom(event: JQuery.ClickEvent) {
    let id: string = (event.target as Element).id;
    console.warn("Click event on element with id " + id);
    this.selectRoomById(id);
  }

  // finds element by id and replaces image with red dot image, to show where user is on map
  public selectRoomById(id: string) {
    const selectedElement = document.getElementById(id);
    const previousSelectedElement = document.getElementsByClassName('active-dot').item(0);
    
    if (previousSelectedElement) {
      previousSelectedElement.setAttribute('src', '/assets/dot.png');
      previousSelectedElement.classList.remove('active-dot');
    }

    selectedElement?.setAttribute('src', '/assets/dot-here.png');
    selectedElement?.classList.add('active-dot');
    this.roomService.changeRoom(id);
  }

}
