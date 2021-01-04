
# Gaia Teste Frontend

## Instruções:

Para rodar o app é necessário instalar algumas dependências:

### Pré-requisitos:

* node.js

* expo cli (terminal)


1. Faça um clone ou baixe o .zip do repositório


2. Após baixar ou clonar os arquivos é necessário instalar os pacotes de dependências do projeto:


```
yarn 

 ```

3. Após a instalação das depedências é só executar o seguinte comando:

```
yarn start
```

 
###  Observação:

Por conta da política do CORS foi preciso utilizar uma extensão do Chrome para poder puxar os dados da API. Além disso foi preciso acrescentar 'https://cors-anywhere.herokuapp.com/' antes do endereço da API em '/services/api.ts' para poder utilizar o método POST.

Aparentemente a API em questão não suporta o método PUT e o método DELETE, impossibilitando realizar edição e exclusão das empresas cadastradas. Porém, as funções foram testadas em ambiente local com uma fake API.



