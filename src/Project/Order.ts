import Coupon from "./Coupon";
import Cpf from './Cpf'
import OrderItem from "./OrderItem";
import Item from "./Item";


export default class Order {
  cpf: Cpf
  orderItems: OrderItem[];
  coupon: Coupon | undefined;
  
  constructor(cpf: string) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
  }
  
  addCoupon (coupon: Coupon) {
    this.coupon = coupon;
  }

  addItem (item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  getTotal() {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) {
      total -= (total * this.coupon.percentage) / 100;
    }
    return total;
  }
  
}
