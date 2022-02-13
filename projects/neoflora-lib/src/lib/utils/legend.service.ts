import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegendService {
  private readonly _seedLegend: LegendType[] = [
    new LegendType('seed', 'Saad'),
    new LegendType('seed-dull', 'Dowwe saad'),
    new LegendType('seed-none', 'Geen saad'),
  ]

  private readonly _offspringLegend: LegendType[] = [
    new LegendType('offspring', 'Nageslag'),
    new LegendType('offspring-none', 'Geen nageslag'),
    new LegendType('offspring-germinate', 'Ontkiem')
  ]

  constructor() {
  }

  get seedLegend(): LegendType[] {
    return this._seedLegend;
  }

  get defaultSeedLegend(): string {
    return this.seedLegend[0].code;
  }

  get offspringLegend(): LegendType[] {
    return this._offspringLegend;
  }

  get defaultOffspringLegend(): string {
    return this.offspringLegend[0].code;
  }
}

export class LegendType {
  private readonly _code: string;
  private readonly _description: string;

  constructor(code: string, description: string) {
    this._code = code;
    this._description = description;
  }

  get code(): string {
    return this._code;
  }

  get description(): string {
    return this._description;
  }
}
