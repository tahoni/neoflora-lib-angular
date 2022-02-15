export class UploadOptions {
  private readonly _allowedFileTypes: string[];
  private readonly _maxSize: number;

  constructor(allowedFileTypes: string[], maxSize: number) {
    this._allowedFileTypes = allowedFileTypes;
    this._maxSize = maxSize;
  }

  get allowedFileTypes(): string[] {
    return this._allowedFileTypes;
  }

  get maxSize(): number {
    return this._maxSize;
  }
}
