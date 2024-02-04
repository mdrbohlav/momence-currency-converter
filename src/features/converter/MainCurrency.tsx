import { IChangeValue } from '../../interfaces/features/converter/changeValue';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import Row from '../../ui/Row';

interface IMainCurrencyProps {
  amount: number | null;
  onChange: (data: IChangeValue) => void;
}

const MainCurrency: React.FC<IMainCurrencyProps> = ({ amount, onChange }) => {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newAmount = event.target.value === '' ? null : Number(event.target.value);

    onChange({ amount: newAmount, currency: 'CZK' });
  }

  return (
    <Row>
      <Label htmlFor="czk">CZK</Label>
      <Input id="czk" type="number" min="0" step="0.01" $variant="main" value={amount ?? ''} onChange={handleInput} />
    </Row>
  );
};

export default MainCurrency;
