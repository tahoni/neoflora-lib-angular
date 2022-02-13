import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppConstantsService} from "../../utils/app-constants.service";

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private router: Router;

  appConstants: AppConstantsService;
  title: string;

  constructor(router: Router, appConstants: AppConstantsService, title: string) {
    this.router = router;
    this.appConstants = appConstants;
    this.title = title;
  }

  ngOnInit(): void {
  }

  redirectToRoot() {
    this.router.navigate(['/']).then();
  }
}
