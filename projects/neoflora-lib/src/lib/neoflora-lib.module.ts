import {NgModule} from '@angular/core';
import {FooterComponent} from './form/footer/footer.component';
import {HeaderComponent} from './form/header/header.component';
import {TahoniLibModule} from "@tahoni/tahoni-lib";
import {ImageService} from "./utils/image.service";
import {FileService} from "./utils/file.service";
import {IconService} from "./utils/icon.service";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
    IconService,
    FileService,
    ImageService,
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
