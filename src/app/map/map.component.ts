import { animate, style, transition, trigger } from '@angular/animations';
import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as $ from 'jquery';
import { RoomNavigationService } from '../room-navigation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s ease-in',
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.5s ease-out',
                    style({ opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'showMapIcon',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s 0.5s ease-in',
                    style({ opacity: 1 }))
          ]
        ),
      ]
    ),
  ]
})
export class MapComponent implements OnInit {

  currentFloorMapUrl: string = '';
  @Input() currentBuilding = '';
  @Input() set currentFloor(floor: number) {
    console.error('NEW FLOOR ' + floor);
    this.floor = floor;
    this.setupCurrentFloorMap();;
  }
  @Input() set selectedRoom(room: string) {
    this.selectRoomById(room);
  }
  @Output() floorChange = new EventEmitter<number>();

  floor = 1;
  addedPoints = 0;
  isMapPanelOpen = false;
  isFloorPanelOpen = false;
  tolstoiFirstFloorMapUrl: string = './assets/Tolstoi/1.korrus/1korruskaart.jpg';
  tolstoiSecondFloorMapUrl: string = './assets/Tolstoi/2korrus/2korruskaart.jpg';
  tolstoiThirdFloorMapUrl: string = './assets/Tolstoi/3.korrus/3korrusekaartt.jpg';

  constructor(private route: ActivatedRoute, private roomService: RoomNavigationService) {
  }

  ngOnInit(): void {
    console.log('Entered building ' + this.currentBuilding);
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
    console.log(this.currentBuilding + this.floor)
        switch (this.floor) {
          case 1:
            this.currentFloorMapUrl = this.tolstoiFirstFloorMapUrl;
            this.createTolstoiFirstFloorPoints();
            break;
          case 2:
            this.currentFloorMapUrl = this.tolstoiSecondFloorMapUrl;
            this.createTolstoiSecondFloorPoints();
            break;
          case 3:
            this.currentFloorMapUrl = this.tolstoiThirdFloorMapUrl;
            this.createTolstoiThirdFloorPoints();
            break;
        }
  }

  get currentFloorMap(): string {
    return this.currentFloorMapUrl;
  }

  toggleMapPanel() {
    this.isFloorPanelOpen = false;
    this.isMapPanelOpen = !this.isMapPanelOpen;
  }

  toggleFloorPanel() {
    this.isMapPanelOpen = false;
    this.isFloorPanelOpen = !this.isFloorPanelOpen;
  }

  changeFloor(floor: number) {
    this.floorChange.emit(floor);
  }

  public createTolstoiFirstFloorPoints() {
    this.placeCoordinate(470, 452, "entrancePano");
    this.placeCoordinate(470, 400, "lobbyPano1");
    this.placeCoordinate(400, 400, "lobbyPano2");
    this.placeCoordinate(395, 310, "lobbyPano5");
    this.placeCoordinate(479, 342, "lobbyPano3");
    this.placeCoordinate(485, 289, "lobbyPano4");
    this.placeCoordinate(600, 287, "gallery1");
    this.placeCoordinate(645, 285, "gallery2");
    this.placeCoordinate(670, 218, "room123Pano1");
    this.placeCoordinate(663, 162, "room123Pano2");
    this.placeCoordinate(725, 222, "canteen1");
    this.placeCoordinate(793, 229, "canteen2");
    this.placeCoordinate(859, 66, "library1");
    this.placeCoordinate(822, 107, "library2");
    this.placeCoordinate(870, 113, "library3");
    //this.placeCoordinate(479, 342, "library4"); //
    this.placeCoordinate(684, 92, "library5");
    this.placeCoordinate(927, 65, "librarySeminar");
    this.placeCoordinate(315, 195, "hall1");
    this.placeCoordinate(315, 295, "hall2");
    this.placeCoordinate(315, 367, "room106");
    this.placeCoordinate(240, 308, "room107");
    this.placeCoordinate(240, 236, "room109");
    this.placeCoordinate(411, 194, "room114refurb");
    this.placeCoordinate(366, 194, "room114corridor");
    this.placeCoordinate(371, 79, "room112Pano1");
    this.placeCoordinate(449, 60, "room112Pano2");
    this.placeCoordinate(444, 113, "room112closet");
    this.placeCoordinate(397, 150, "room112entrance");
    this.placeCoordinate(315, 295, "wetLab");
    this.placeCoordinate(359, 121, "room112corridor");
    this.placeCoordinate(444, 154, "room114corridor2");
    this.placeCoordinate(502, 152, "room114corridor3");
    this.placeCoordinate(256, 150, "corridor1");
    this.placeCoordinate(257, 181, "corridor2");
    this.placeCoordinate(262, 79, "room110");
    this.placeCoordinate(499, 58, "room114");
    this.placeCoordinate(594, 150, "room118");
    this.placeCoordinate(189, 182, "room111Pano1");
    this.placeCoordinate(96, 178, "room111Pano2");
    this.placeCoordinate(589, 75, "room117");
    this.placeCoordinate(589, -1, "entranceStreet")
    // entranceStreet ???
  }

  public createTolstoiSecondFloorPoints() {
    this.placeCoordinate(399, 268, "secondStartPano");
    this.placeCoordinate(381, 200, "secondHallPano");
    this.placeCoordinate(393, 153, "secondHallPano2");
    this.placeCoordinate(393, 104, "paintingHallPano1");
    this.placeCoordinate(501, 107, "paintingHallPano2");
    this.placeCoordinate(571, 114, "roomPano1");
    this.placeCoordinate(581, 148, "roomPano2");
    this.placeCoordinate(501, 151, "corridorPano1");
    this.placeCoordinate(314, 207, "corridorPano2");
    this.placeCoordinate(317, 167, "corridorPano3");
    this.placeCoordinate(485, 208, "paintingLeadPano");
    this.placeCoordinate(309, 288, "paintingRoomPano");
    this.placeCoordinate(299, 114, "restoRoomPano");
    this.placeCoordinate(222, 108, "restoRoomPano2");
    this.placeCoordinate(472, 269, "terrassPano1");
    this.placeCoordinate(477, 389, "terrassPano2");
    this.placeCoordinate(642, 104, "drawingClassPano1");
    this.placeCoordinate(750, 108, "drawingClassPano2");
    this.placeCoordinate(905, 111, "drawingClassPano3");
    this.placeCoordinate(710, 208, "drawingClassPano4");
    this.placeCoordinate(597, 215, "stairsPano1");
    this.placeCoordinate(422, 292, "stairsPano2");
  }

  public createTolstoiThirdFloorPoints() {
    this.placeCoordinate(256, 367, "stairsPano");
    this.placeCoordinate(256, 300, "hallwayPano");
    this.placeCoordinate(140, 316, "workroomPano");
    this.placeCoordinate(348, 96, "workroom2Pano");
    this.placeCoordinate(338, 255, "workroom3Pano");
    this.placeCoordinate(432, 251, "workroom4Pano");
    this.placeCoordinate(500, 131, "hallway2Pano");
    this.placeCoordinate(351, 127, "hallway3Pano");
    this.placeCoordinate(271, 140, "hallway4Pano");
    this.placeCoordinate(492, 73, "roomPano");
    this.placeCoordinate(505, 180, "hallway5Pano");
    this.placeCoordinate(650, 120, "workroom5Pano");
    this.placeCoordinate(864, 120, "workroom6Pano");
    this.placeCoordinate(175, 268, "hallway6Pano");

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
    if( offY > margin) offY -= margin;

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
