import {Company} from "../types/company.type";

export class AppConstants {
  private static readonly _company =
    new Company('Neoflora', 'Neoflora (Pty) Ltd', '', 'neoflora.png')

  static get company(): any {
    return this._company;
  }
}
