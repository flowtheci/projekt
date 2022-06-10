import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tour-container',
  templateUrl: './tour-container.component.html',
  styleUrls: ['./tour-container.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('0.75s ease-out', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class TourContainerComponent implements OnInit {
  building: string = '';
  showControls = true;

  constructor(private route: ActivatedRoute) { }   

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.building = data['building'];
      console.log('Entered building ' + this.building);
    });
  }

  closeControlDialog() {
    this.showControls = false;
  }
}
