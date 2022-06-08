export interface IProduct {
  id: number
  company: string,
  title: string,
  image: string,
  rating: IRating,
  price: IPrice,
  deliveryOptions: IDeliveryOptions,
  bage?: IBage
  colors: IColor[]
}

export interface IRating {
  value: number
  reviews: number
}

export interface IPrice {
  value: number
  discount: number
}

export interface IDeliveryOptions {
  delivery: string,
  postamate: boolean,
  available: number,
}

export interface IBage {
  color: string,
  value: string
}

export interface IColor {
  color: string,
  image: string
}
