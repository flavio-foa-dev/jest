import { calculaDescontos, somaHorasExtras } from '../app';

describe('when creating page payment', () => {
  it('should create sum  payment increment', () => {
    const esperado = 3000;
    const result = somaHorasExtras(2000, 1000);

    expect(result).toBe(esperado);
  });

  it('should create sum  payment decrement', () => {
    const esperado = 1000;
    const result = calculaDescontos(2000, 1000);

    expect(result).toBe(esperado);
  });
});
