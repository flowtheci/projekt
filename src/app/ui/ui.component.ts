import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s 0.5s ease-in',
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
  ]
})
export class UiComponent implements OnInit {

  showBuildingPicker = false;

  constructor(private translate: TranslateService, private toastr: ToastrService) { }

  ngOnInit(): void {
    let language = localStorage.getItem('language');
    if (language) {
      this.translate.use(language);
      console.log("Using localstorage lang preference: " + language);
    }
  }

  async showNoBuilding() {
    this.translate.stream('common.buildingMissingText').subscribe((res: string) => {
      this.toastr.warning(res);
    });
  }

  // Creates an event in browser history when user enters virtual tour menu, and shows the building picker
  toggleView() {
    history.pushState(null, "null", window.location.href);
    this.showBuildingPicker = !this.showBuildingPicker;
  }

  toggleLanguage() {
    if (this.translate.currentLang == 'en') {
      this.translate.use('ee');
      localStorage.setItem('language', 'ee');
    } else {
      this.translate.use('en');
      localStorage.setItem('language', 'en');
    }
  }

  enrollmentClicked() {
    if (this.translate.currentLang == 'en') {
      document.location.href = 'https://pallasart.ee/en/admission/';
    } else {
      document.location.href = 'https://pallasart.ee/sisseastumine/';
    }
  }

  studiesClicked() {
    if (this.translate.currentLang == 'en') {
      document.location.href = 'https://pallasart.ee/en/studies/';
    } else {
      document.location.href = 'https://pallasart.ee/oppimine/';
    }
  }

  // Creates an event listener which listens for every browser history change, and toggles the building picker menu when triggered
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    this.showBuildingPicker = !this.showBuildingPicker;
  }



}
