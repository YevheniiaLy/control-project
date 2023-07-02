import { Button } from '@mui/material'
import './CurrencyButton.scss'
type Props = {
    mapCurrencyAndPrice: (newCurrency: string, coef: number) => void
}
const CurrencyButton = ({ mapCurrencyAndPrice }: Props) => {
    return (
        <div className="btn-box">
            <Button
                variant="outlined"
                onClick={() => mapCurrencyAndPrice('UAH', 40)}
            >
                UAH
            </Button>
            <Button
                variant="outlined"
                onClick={() => mapCurrencyAndPrice('USD', 1)}
            >
                USD
            </Button>
            <Button
                variant="outlined"
                onClick={() => mapCurrencyAndPrice('EUR', 0.91)}
            >
                EUR
            </Button>
            <Button
                variant="outlined"
                onClick={() => mapCurrencyAndPrice('PLN', 4.06)}
            >
                PLN
            </Button>
        </div>
    )
}
export default CurrencyButton
