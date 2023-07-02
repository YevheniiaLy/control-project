import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'
import { useState } from 'react'
import CurrencyButton from 'components/CurrencyButton/CurrencyButton'

type Props = {
    id: number
    title: string
    description: string
    currency: string
    price: number
    image: string
    addPrice: (price: number) => void
}

const ProductsListItem = ({
    id,
    title,
    description,
    currency,
    price,
    image,
    addPrice,
}: Props) => {
    const [mappedCurrency, setMappedCurrency] = useState(currency)
    const [mappedPrice, setMappedPrice] = useState(price)

    const mapCurrencyAndPrice = (newCurrency: string, coef: number) => {
        const newPrice = price * coef

        setMappedCurrency(newCurrency)
        setMappedPrice(newPrice)
    }

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="iPhone" />
                </div>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-price">
                    {mappedCurrency}: {mappedPrice}
                </div>
                <Button
                    variant="outlined"
                    onClick={() => addPrice(mappedPrice)}
                >
                    Buy
                </Button>
                <CurrencyButton mapCurrencyAndPrice={mapCurrencyAndPrice} />
            </CardContent>
        </Card>
    )
}

export default ProductsListItem
