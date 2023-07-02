export type Product = {
    id: number
    title: string
    description: string
    currency: string

    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        currency: 'USD',
        price: 2000,
        image: '/images/iphone-red.webp',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        currency: 'USD',

        price: 1500,
        image: '/images/iphone-gold.webp',
    },
    {
        id: 3,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        currency: 'USD',

        price: 2500,
        image: '/images/iphone-purple.webp',
    },
]
export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
export default productsArray
