import {Injectable} from '@angular/core';
import {UploadOptionsImage} from "../types/upload-options-image.types";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private _photoUploadFileOptions: UploadOptionsImage =
    new UploadOptionsImage(
      ['image/png', 'image/jpg', 'image/jpeg'],
      20971520 /* 20 MB */,
      25600,
      25600)

  constructor() {
  }

  get photoUploadFileOptions(): UploadOptionsImage {
    return this._photoUploadFileOptions;
  }
}
