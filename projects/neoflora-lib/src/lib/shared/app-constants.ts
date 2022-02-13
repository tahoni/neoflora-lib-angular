import {Company} from "../types/company";

export class AppConstants {
  private static readonly _company =
    new Company('Neoflora', 'Neoflora (Pty) Ltd', '76/01503/07',
      'neoflora.png');

  static get company(): any {
    return this._company;
  }
}
