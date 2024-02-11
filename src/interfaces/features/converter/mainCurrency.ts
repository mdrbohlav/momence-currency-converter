import { IChangeValue } from './changeValue';

export interface IMainCurrencyProps {
  amount: number | null;
  onChange: (data: IChangeValue) => void;
}
