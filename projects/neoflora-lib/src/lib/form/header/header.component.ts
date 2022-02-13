import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppConstants} from "../../shared/app-constants";
import {Company} from "../../types/company";

@Component({
  selector: 'lib-neoflora-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private router: Router;

  private _company: Company = AppConstants.company;
  private _title = AppConstants.company.name;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  redirectToRoot() {
    this.router.navigate(['/']).then();
  }

  get company(): Company {
    return this._company;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
