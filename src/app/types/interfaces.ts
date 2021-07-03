export interface Coin {
  name: string;
  symbol: string;
  nameSymbol: string;
  id: number;
}

export interface convertFormData {
  amountToConvert: number;
  convertFrom: string;
  convertTo: string;
}