import {Injectable} from '@angular/core';
import {FileUploadOptionsType} from "./file.service";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private _photoUploadFileOptions: ImageUploadOptionsType =
    new ImageUploadOptionsType(
      ['image/png', 'image/jpg', 'image/jpeg'],
      20971520 /* 20 MB */,
      25600,
      25600)

  constructor() {
  }

  get photoUploadFileOptions(): ImageUploadOptionsType {
    return this._photoUploadFileOptions;
  }
}

export class ImageUploadOptionsType extends FileUploadOptionsType {
  private readonly _maxHeight: number;
  private readonly _maxWidth: number;

  constructor(allowedFileTypes: string[], maxSize: number, maxHeight: number, maxWidth: number) {
    super(allowedFileTypes, maxSize);
    this._maxHeight = maxHeight;
    this._maxWidth = maxWidth;
  }

  get maxHeight(): number {
    return this._maxHeight;
  }

  get maxWidth(): number {
    return this._maxWidth;
  }
}
