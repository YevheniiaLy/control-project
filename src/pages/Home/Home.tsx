
import ProductsList from 'components/Products/ProductsList'
import Total from 'components/Total/Total'
import { useState } from 'react'

type Props = {}
type TotalData = {
    totalPrice: number
}

const Home = (props: Props) => {
    const [totalData, setTotalData] = useState<TotalData>({
        totalPrice: 0,
    })
    const addPrice = (price: number) => {
        setTotalData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    return (
        <>
            <ProductsList addPrice={addPrice} />

            <Total totalData={totalData} />
        </>
    )
}
export default Home
