import {NgModule} from '@angular/core';
import {FooterComponent} from './form/footer/footer.component';
import {HeaderComponent} from './form/header/header.component';
import {TahoniLibModule} from "@tahoni/tahoni-lib";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    TahoniLibModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class NeofloraLibModule {
}
