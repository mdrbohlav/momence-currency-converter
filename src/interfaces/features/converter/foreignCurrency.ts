import { IChangeValue } from './changeValue';

export interface IForeignCurrency {
  id: number;
  currency: string;
}

export interface IForeignCurrencyProps {
  mainAmount: number | null;
  defaultCurrency: string;
  unusedCurrencies: string[];
  onCurrencyChange: (data: IChangeValue) => void;
  onManualChange: (data: IChangeValue) => void;
  children?: React.ReactNode;
}
