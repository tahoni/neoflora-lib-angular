import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppConstants} from "../../shared/app.constants";
import {Company} from "../../types/company.type";

@Component({
  selector: 'neoflora-lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  @Input() heading: string;

  private router: Router;

  private _company: Company = AppConstants.company;

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
}
