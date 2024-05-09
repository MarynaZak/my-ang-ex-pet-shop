export class ProductTile {
    id: number = 0
    name: string
    photo: string
    price: number
    quantity: number
    constructor(name: string, photo: string, price: number, quantity: number) {
        this.name = name
        this.photo = photo
        this.price = price
        this.quantity = quantity
    }   
}