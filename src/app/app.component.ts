import {Component, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MediaMatcher} from "@angular/cdk/layout";
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Modules';
  screenWidth: number;
  mobileQuery: MediaQueryList;
  showFiller = false;
  @ViewChild(MatDrawer, { static: false }) sideNav!: MatDrawer;

  constructor(private translate: TranslateService, media: MediaMatcher) {
    this.screenWidth = window.innerWidth;
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    translate.setDefaultLang('de');    translate.use('de');
  }
}
