const uppercase = require('./exercise1');
const getUserName = require('./exercise2and3');
const getRepos = require('./exercise4');

describe('teste do exercício 1', () => {
  test("se retorna a string maiscula", done => {
    uppercase('testando', (result) => {
      expect(result).toBe('TESTANDO');
      done()
    })
  });
});


// testes do exercício 2
describe('testes do exercício 2', () => {
  test('testa se encontrou um ID', () => {
    expect.assertions(1);

    // return getUserName(6).then(name => expect(name).toBe('Ana'));
    return expect(getUserName(6)).resolves.toBe('Ana');
  });

  test('testa se não encontrou um ID', () => {
    expect.assertions(1);

    // return getUserName(1).catch(error =>
    //   expect(error).toEqual({ error: 'User with 1 not found.' })
    // );
    return expect(getUserName(1)).rejects.toEqual(
      { error: 'User with 1 not found.' }
    );
  });
});

describe('teste do exercício 3', () => {
  test('testa se encontrou um ID', async () => {
    expect.assertions(1);

    const name = await getUserName(6);
    expect(name).toBe('Ana');
  });

  test('testa se não encontrou um ID', async () => {
    expect.assertions(1);

    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    }
  });
});

describe('teste do exercício 4', () => {
  test('verifica os repos obtidos através de getRepos', async () => {
    expect.assertions(2);

    const repos = await getRepos('https://api.github.com/users/tryber/repos');

    expect(repos).toContain('sd-01-block22-project-queries-unite');
    expect(repos).toContain('sd-01-week19-recipes-app-2');
  });
});