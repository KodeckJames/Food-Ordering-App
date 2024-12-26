export type Product = {
  id: number // Keep as number
  image: string | null
  name: string
  price: number
}

export type PizzaSize = 'S' | 'M' | 'L' | 'XL'

export type CartItem = {
  id: number // Keep this as number to match Product.id
  product: Product // Keep product reference
  size: PizzaSize // Pizza size
  quantity: number // Quantity in cart
}

// Order status related types
export const OrderStatusList: OrderStatus[] = [
  'New',
  'Cooking',
  'Delivering',
  'Delivered',
]

export type OrderStatus = 'New' | 'Cooking' | 'Delivering' | 'Delivered'

export type Order = {
  id: number
  created_at: string
  total: number
  user_id: string
  status: OrderStatus
  order_items?: OrderItem[]
}

export type OrderItem = {
  id: number
  product_id: number // This remains, referencing Product
  products: Product // This remains, referencing the actual product
  order_id: number
  size: PizzaSize // Pizza size
  quantity: number // Quantity
}

export type Profile = {
  id: string // Keep as string if that's your intended design
  group: string // Keep as is
}
