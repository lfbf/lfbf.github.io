/* 
O código a seguir simula uma chamada ao banco de dados para buscar usuários. 
O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName. 
*/

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
  6: { name: 'Ana'},
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}
      

// console.log(findUserById(5));
//console.log(getUserName(6));

module.exports = getUserName;