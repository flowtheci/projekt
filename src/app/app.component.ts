import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ee');
    translate.use('ee');
  }
  
  title = 'virtuaaltuur';

  // Returns URL query parameter with given key or empty string if it doesn't exist
  public getURLParameter(param: string): string {
    var pageURL = window.location.search.substring(1);
    var urlVars = pageURL.split('&');
    for (var i = 0; i < urlVars.length; i++) {
      var paramName = urlVars[i].split('=');
      if (paramName[0] == param) {
        return paramName[1] ?? '';
      }
    }
    return ''
  }
}
