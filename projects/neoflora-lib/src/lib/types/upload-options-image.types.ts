import {UploadOptions} from "./upload-options.type";

export class UploadOptionsImage extends UploadOptions {
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
