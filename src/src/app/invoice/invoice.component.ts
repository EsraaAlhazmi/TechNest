import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  cartItems: any[] = [];
  userInfo: any = {};
  currentDate: Date = new Date(); 
  orderId!: string; 
  totalAmount: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.userInfo = history.state.userInfo || {};

    this.orderId = this.generateOrderId();
    
    this.calculateTotalAmount(); 
  }

  private generateOrderId(): string {
    return 'ORD-' + Math.floor(1000 + Math.random() * 9000).toString();
  }

  private calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
