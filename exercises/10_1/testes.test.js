const soma = require('./soma');
const myindexOf = require('./myindexOf');
const mysum = require('./minhasoma');
const minharemocao = require('./minharemocao');
const meufizzbuzz = require('./meufizzbuzz');
const ha = require('./ha');
const estaacima = require('./estaacima');
const compararjson = require('./compararjson');

describe('soma dois números', () => {
  test('soma 4 e 5 resultado é 9', () => {
    expect(soma(4, 5)).toBe(9)
  })

  test('soma 0 e 0 resultado é 0', () => {
    expect(soma(0, 0)).toBe(0)
  })

  test('se retorna erro na soma 4 e "5"', () => {
    expect(() => {
      soma(4, "5");
    }).toThrow();
  });

  test('se retorna um erro com mensagem tratada na soma 4 e "5"', () => {
    expect(() => {
      soma(4, "5");
    }).toThrowError(new Error('parameters must be numbers'));
  })
});

describe('testa a função myindexof', () => {
  test('verifica se myindexOf é uma função', () => {
    expect(typeof myindexOf).toBe('function');
  });

  test('testando se retorna a posição (index)', () => {
    expect(myindexOf([1, 2, 3, 4], 3)).toBe(2);
  });

  test('testando se retorna -1 já que não existe posição', () => {
    expect(myindexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});


describe('testando a função mysum', () => {
  test('verifica se myRemove é uma função', () => {
    expect(typeof minharemocao).toBe('function');
  });

  test('elementos do array somados é igual a 10', () => {
    expect(mysum([1, 2, 3, 4])).toBe(10)
  });

  test('elementos do array somados [1, -2, -3, 4] é igual a 0', () => {
    expect(mysum([1, -2, -3, 4])).toBe(0)
  });

  test('elementos do array somados [1, 3, -5 , 7, -9, 11] é igual a 8', () => {
    expect(mysum([1, 3, -5, 7, -9, 11])).toBe(8)
  });

  test('elementos do array somados [] é igual a 0', () => {
    expect(mysum([])).toBe(0)
  });
});


describe('testando a função myRemove', () => {
  test('verifica se mysum é uma função', () => {
    expect(typeof mysum).toBe('function');
  });

  test('se o passando o array [1, 2, 3, 4] e 3 retorna o array [1, 2, 4]', () => {
    expect(minharemocao([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
  });

  test('se o passando o array [1, 2, 3, 4] e 3 não retorna o array [1, 2, 3, 4]', () => {
    expect(minharemocao([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4])
  });

  test('se passando o array [1, 2, 3, 4] e 5 continua retornando o array [1, 2, 3, 4]', () => {
    expect(minharemocao([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4])
  });
});

describe('testando a função FizzBuzz', () => {
  test('número 15 passado por parâmetro é divísivel por 5 e 3 retorna fizzbuzz', () => {
    expect(meufizzbuzz(15)).toBe('fizzbuzz');
  });

  test('número 9 passado por parâmetro é divísivel 3 retorna fizz', () => {
    expect(meufizzbuzz(9)).toBe('fizz');
  });

  test('número 25 passado por parâmetro é divísivel apenas por 5 retorna buzz', () => {
    expect(meufizzbuzz(25)).toBe('buzz');
  });

  test('retorna o próprio número caso não seja divísivel por 5 ou 3', () => {
    expect(meufizzbuzz(17)).toBe(17);
  });

  test('se o parâmetro não é um númer retorna falso', () => {
    expect(meufizzbuzz('this_is_not_a_number')).toBe(false);
  });
});

describe('testando a variável thereIs', () => {
  test('se a variável foi definida', () => {
    expect(typeof ha).not.toBe('undefined');
  });
});

describe('está acima isabove', () => {
  test('se 7 é maior que 5 retorna true', () => {
    expect(estaacima(7, 5)).toBe(true);
  });

  test('se 7 é igual a 7 retorna falso', () => {
    expect(estaacima(7, 7)).toBe(false);
  });

  test('se 7 é maior que 8 retorna false', () => {
    expect(estaacima(7, 8)).toBe(false);
  });
});

describe('comparar json', () => {
  test('se o obj1 é igual aos obj2', () => {
    expect(compararjson.obj1).toStrictEqual(compararjson.obj2);
  });

  test('se o obj1 é diferente do obj 3', () => {
    expect(compararjson.obj1).not.toStrictEqual(compararjson.obj3);
  });

  test('se o obj2 é diferente do obj3', () => {
    expect(compararjson.obj2).not.toStrictEqual(compararjson.obj3);
  });
});