import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type Props = {
    addPrice: (price: number) => void
}
const ProductsList = ({ addPrice }: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Our Shop Page
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({ id, title, description, currency, price, image }) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                description={description}
                                currency={currency}
                                price={price}
                                image={image}
                                addPrice={addPrice}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
