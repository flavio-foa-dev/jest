import Carrinho from '../carrinho';
import Item from '../item';

describe('Item in car', () => {
  it('should init  vazio', () => {
    const car = new Carrinho();

    expect(car.subtotal).toBeNull();
  });

  it('should add item to car', () => {
    const item = new Item('Uva', 0.3, 7);
    const item1 = new Item('Uva', 0.3, 7);

    const car = new Carrinho();
    car.adiciona(item);
    car.adiciona(item1);

    expect(typeof car).toBe('object');
    expect(car.itens[0]).toBe(item);
    expect(car.itens[1]).toBe(item1);
  });
});
