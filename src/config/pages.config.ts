export class PagesConfig {
  static HOME = '/'

  static LOGIN = '/login'
  static ORDERS = '/orders'
  static FAVORITES = '/favorites'
  static CART = '/cart'

  static PRODUCT_DETAILS(slug: string) {
    return `/product/${slug}`
  }

  static FRESH = '/fresh'
  static OZON_CARD = '/ozon-card'
  static AIR_TICKETS = '/air-tickets'
  static FOR_BUSINESS = '/for-business'
  static CLOTHING = '/clothing'
  static ELECTRONICS = '/electronics'
  static HOME_AND_GARDEN = '/home-and-garden'
  static PRODUCTS_FOR_1_RUB = '/products-for-1-rub'
  static CERTIFICATES = '/certificates'
}