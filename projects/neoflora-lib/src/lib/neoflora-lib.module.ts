import {NgModule} from '@angular/core';
import {NeofloraLibComponent} from './neoflora-lib.component';
import {FooterComponent} from './form/footer/footer.component';
import {HeaderComponent} from './form/header/header.component';

@NgModule({
  declarations: [
    NeofloraLibComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
  ],
  exports: [
    NeofloraLibComponent
  ]
})
export class NeofloraLibModule {
}
