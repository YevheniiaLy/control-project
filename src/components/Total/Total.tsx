import './Total.scss'

type Props = {
    totalData: {
        totalPrice: number
    }
}
const Total = ({ totalData }: Props) => {
    return <div className="total-box">Total: {totalData.totalPrice}</div>
}
export default Total
