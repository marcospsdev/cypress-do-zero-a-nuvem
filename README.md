# Cypress, do Zero à Nuvem

Este projeto é um exemplo prático para o curso **"Cypress, do Zero à Nuvem"**, demonstrando a utilização do Cypress para automação de testes web, cobrindo desde os fundamentos até cenários mais avançados, com foco na execução em diferentes ambientes, incluindo mobile.

---

## Pré-requisitos

Para executar este projeto, você precisará ter as seguintes ferramentas instaladas em sua máquina:

* **Git**: `2.45.1` ou superior (lts).

* **Node.js**: `22.13.1` ou superior (lts).

* **npm** (Node Package Manager): `11.4.1` ou superior (lts).

* **Cypress**: A versão utilizada no projeto é `13.12.0`. Será instalado automaticamente ao rodar `npm install`.

* **IDE (Ambiente de Desenvolvimento Integrado)**: Recomenda-se o uso de um IDE como **Visual Studio Code** ou **WebStorm** para uma melhor experiência de desenvolvimento.

---

## Instalação

Siga os passos abaixo para configurar o ambiente e instalar as dependências do projeto:

1.  Clone este repositório para sua máquina local.

2.  Navegue até a pasta raiz do projeto.

3.  Execute o comando `npm install` (ou `npm i` para a versão curta) para instalar todas as dependências de desenvolvimento.

```
npm instal
```

---

## Testes

Este projeto oferece diferentes maneiras de executar os testes, tanto em modo interativo quanto em modo *headless* (sem interface gráfica), e também configurações para diferentes *viewports* (desktop e mobile).

### Executar Testes em Modo Headless

Para executar todos os testes em modo *headless*, use os seguintes comandos:

* **Desktop**:

    ```
    npm test

    ```

* **Mobile** (com *viewport* configurado para dispositivos móveis):

    ```
    npm run test:mobile

    ```

### Abrir o Cypress em Modo Interativo

Para abrir o Cypress App e executar os testes de forma interativa, você pode usar:

* **Desktop**:

    ```
    npm run cy:open

    ```

* **Mobile** (com *viewport* configurado para dispositivos móveis):

    ```
    npm run cy:open:mobile

    ```

### Scripts de Execução

Os scripts de execução estão definidos no arquivo `package.json` do projeto, como mostrado abaixo:

```
"scripts": {
"cy:open": "cypress open",
"cy:open:mobile": "cypress open --config viewportWidth=410,viewportHeight=860",
"test": "cypress run",
"test:mobile": "cypress run --config viewportWidth=410,viewportHeight=860"
},
```


---

## Suporte ao Projeto

Se você gostou deste projeto e ele foi útil para você, considere deixar uma ⭐ para apoiar o trabalho!

---

Este projeto foi criado com 💚 para o curso **"Cypress, do Zero à Nuvem"**.
