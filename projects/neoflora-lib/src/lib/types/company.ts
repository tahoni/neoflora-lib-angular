export class Company {
  private readonly _name: string;
  private readonly _legalName: string;
  private readonly _registrationNumber: string;
  private readonly _logo: string;
  private readonly _base64: string;

  constructor(name: string, legalName: string, registrationNumber: string, logo: string, base64: string) {
    this._name = name;
    this._legalName = legalName;
    this._registrationNumber = registrationNumber;
    this._logo = logo;
    this._base64 = base64;
  }

  get name(): string {
    return this._name;
  }

  get legalName(): string {
    return this._legalName;
  }

  get registrationNumber(): string {
    return this._registrationNumber;
  }

  get logo(): string {
    return this._logo;
  }

  get base64(): string {
    return this._base64;
  }
}
