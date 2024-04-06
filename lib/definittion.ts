export type ProductType = {
    id: number,
    name: string,
    category: string,
    price: number,
    image: string,
    desc: string
}
export type FormDataUpdate = {readonly id: number, category: {name: any}, name: string, desc: string, image?: string, price: string, quantity: string, seller: string, fileProduct: any}
