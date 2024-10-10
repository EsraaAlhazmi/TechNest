import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];

  addToCart(product: any, quantity: number) {
    const cartItem = this.cartItems.find(item => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += quantity;
      console.log(`Updated product quantity: ${cartItem.quantity}`);
    } else {
      this.cartItems.push({ ...product, quantity });
      console.log(`Added new product with quantity: ${quantity}`);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }
}
