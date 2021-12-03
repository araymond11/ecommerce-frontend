export interface Product {
    id: number,
    image: string,
    name: string,
    description: string,
    price: number,
    quantity: number
}

export interface ProductTable {
    product: Product,
    index: string,
    onClick: () => void
}