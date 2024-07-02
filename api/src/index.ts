interface IUser {
    user: string
}

type Product = {
    name: string,
    price: number,
    category: CATEGORIES
}

enum CATEGORIES {
    MEAT = 1,
    DAIRY = 2,
    DRINKS = 3
}

const p1: Product = { name: "coffee", price: 10, category: CATEGORIES.DRINKS }
const p2: Product = { name: "coffee", price: 10, category: CATEGORIES.DRINKS }



function getUser(): IUser {
    return { user: "galamouyal88@gmail.com" }
}