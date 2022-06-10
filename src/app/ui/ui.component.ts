import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  showBuildingPicker = false;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  // Creates an event in browser history when user enters virtual tour menu, and shows the building picker
  enterVirtualTour() {
    history.pushState(null, "null", window.location.href);
    this.showBuildingPicker = !this.showBuildingPicker;
  }

  toggleLanguage() {
    if (this.translate.currentLang == 'en') {
      this.translate.use('ee');
    } else {
      this.translate.use('en');
    }

  }

  // Creates an event listener which listens for every browser history change, and hides the building picker when triggered
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: any) {
    this.showBuildingPicker = false;
  }
  
  

}
