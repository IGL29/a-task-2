import { IProduct } from '../types/card'

export const product: IProduct = {
  id: 1,
  company: 'Google',
  title: 'Google Pixel 4 64GB',
  image: 'https://cdn.fotosklad.ru/upload/iblock/b1e/b1ef73d02c7cf0aa273c957fff92c921_thumb_c964fe4a8e60f8f.jpg',
  rating: {
    value: 4,
    reviews: 4,
  },
  price: {
    value: 63000,
    discount: 0.17
  },
  deliveryOptions: {
    delivery: '21.07',
    postamate: true,
    available: 1,
  },
  bage: {
    color: '#FF3366',
    value: 'Скидка -17%'
  },
  colors: [
    {
      color: 'black',
      image: 'https://cdn.fotosklad.ru/upload/iblock/b1e/b1ef73d02c7cf0aa273c957fff92c921_thumb_c964fe4a8e60f8f.jpg'
    },
    {
      color: 'white',
      image: 'https://gigant-store.ru/image/catalog/novinki-gs-images/smartfon-google-pixel-4-6.jpg'
    },
    {
      color: 'orange',
      image: 'https://static-eu.insales.ru/images/products/1/605/260792925/large_T-kit.ru_Google_Pixel_4_XL__Orange_.png'
    }
  ]
}
