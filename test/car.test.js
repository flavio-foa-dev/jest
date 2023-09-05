import Carrinho from '../carrinho';
import Item from '../item';

describe('Item in car', () => {
  it('should init  vazio', () => {
    const car = new Carrinho();

    expect(car.subtotal).toBeNull();
  });

  it('should add item to car', () => {
    const item = new Item('Uva', 0.3, 7);
    const item1 = new Item('Maracuja', 0.6, 5);

    const car = new Carrinho();
    car.adiciona(item);
    car.adiciona(item1);

    expect(typeof car).toBe('object');
    expect(car.itens[0]).toBe(item);
    expect(car.itens[1]).toBe(item1);

    expect(car.itens).toContain(item);
    expect(car.itens).toContain(item1);
  });

  it('should have property total, frete, subtotal itens', () => {
    const car = new Carrinho();

    expect(car).toHaveProperty('total');
    expect(car).toHaveProperty('frete');
    expect(car).toHaveProperty('subtotal');
    expect(car).toHaveProperty('itens');
  });

  it('Deve lancar erro ao fechar ao finalizar com o carrinho vazio', () => {
    function handleCar() {
      const car = new Carrinho();
      car.finalizaCompra();
    }

    expect(handleCar).toThrowError('Carrinho de compras vazio');
  });

  it('should add frete', () => {
    const car = new Carrinho();
    car.adicionaFrete(10);

    expect(car.frete).toBe(10);
  });

  it('Deve finalizar as compars', () => {
    const item = new Item('Uva', 2, 5);
    const item1 = new Item('Caju', 3, 9);

    const car = new Carrinho();
    car.adiciona(item);
    car.adiciona(item1);
    car.adicionaFrete(15);

    expect(car.finalizaCompra()).toStrictEqual(
      {
        subtotal: 37,
        frete: 15,
        total: 52,
      },
    );
  });
});
