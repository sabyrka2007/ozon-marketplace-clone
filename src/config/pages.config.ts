export class PagesConfig {
  static HOME = '/'

  static LOGIN = '/login'
  static ORDERS = '/orders'
  static FAVORITES = '/favorites'
  static CART = '/cart'

  static PRODUCT_DETAILS(slug: string) {
    return `/product/${slug}`
  }
}