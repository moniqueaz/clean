import Coupon from "../src/project/Coupon";
import Order from '../src/project/Order'
import Item from "../src/project/Item";


describe('Order', () => {
  it('Deve criar um pedido vazio com CPF válido', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf)
    const total = order.getTotal()
    expect(total).toBe(0)
  })
  
  it("Deve tentar criar um pedido vazio com CPF inválido", function () {
    const cpf = "111.111.111-11";
    expect(() => new Order(cpf)).toThrow(new Error("Invalid cpf"));
  });

  it("Deve criar um pedido com 3 itens", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    order.addItem(new Item(1, "Música", "CD", 30), 3);
    order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
    order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);
    const total = order.getTotal();
    expect(total).toBe(160);
  });

  it("Deve criar um pedido com 3 itens com um cupom de desconto", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    order.addItem(new Item(1, "Música", "CD", 30), 3);
    order.addItem(new Item(2, "Vídeo", "DVD", 50), 1);
    order.addItem(new Item(3, "Vídeo", "VHS", 10), 2);
    order.addCoupon(new Coupon("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(128);
  });
})