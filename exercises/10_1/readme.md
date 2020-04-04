Como usar os testes

pré requisito:

instalar o jest via terminal install 
ter a pasta node_modules no mesmo diretório dos testes

instalando o Jester

https://medium.com/jaguaribetech/testando-seu-javascript-com-jest-de2a4674f4ad

Passo a passo para criar os testes com Jester

Passo 1: Crie uma pasta onde irão ficar os arquivos de teste e entre nela.
Passo 2: Crie um arquivo chamado package.json, e nele coloque o seguinte conteúdo:

{
  "scripts": {
    "test": "jest"
  }
}

Passo 3: Navegue até a pasta usando o comando cd do terminal e rode o seguinte: 
npm install --save-dev jest (para isso você deve ter o npm instalado, e de preferência atualizado). Note 
que foram adicionadas duas coisas, a pasta node_modules e o arquivo package-lock.json, deixe os dois lá.

==========================================================================================================
exemplo de package.json

{
  "scripts": {
    "test": "jest --watch",
    "testCoverage": "jest --coverage"  
  },
  "devDependencies": {
    "jest": "^25.2.6"
  }
}

"test": "jest --watch"  // para ser executado sempre que o arquivo de teste for alterado

==========================================================================================
- para rodar o teste na pasta

npm run testes.test.js
npm test testes.test.js

==========================================================================================
para rodar a cobertura de código

npm run testCoverage

==========================================================================================