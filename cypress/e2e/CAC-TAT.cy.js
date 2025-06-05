describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    const longText = Cypress._.repeat("abcdefghijklmnopqrstuvwxyz", 10);

    cy.get("#firstName").type("Marcos");
    cy.get("#lastName").type("Paulo");
    cy.get("#email").type("contato.marcosps@gmail.com");
    cy.get("#open-text-area").type(longText, {
      delay: 0,
    });
    cy.get('button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida ", () => {
    cy.get("#firstName").type("Marcos");
    cy.get("#lastName").type("Paulo");
    cy.get("#email").type("contato.marcosps");
    cy.get("#open-text-area").type("Gostei da aplicação, parabéns.");
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("campo telefone continua vazio quando preenchido com um valor não-numérico", () => {
    cy.get("#phone").type("Teste").should("be.empty");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Marcos");
    cy.get("#lastName").type("Paulo");
    cy.get("#email").type("contato.marcosps@gmail.com");
    cy.get("#open-text-area").type("Gostei da aplicação, parabéns.");
    cy.get("#phone-checkbox").click();
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone ", () => {
    cy.get("#firstName")
      .type("Marcos")
      .should("have.value", "Marcos")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Paulo")
      .should("have.value", "Paulo")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("contato.marcosps@gmail.com")
      .should("have.value", "contato.marcosps@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("85994135656")
      .should("have.value", "85994135656")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", () => {
    const data = {
      firstName: "Marcos",
      lastName: "Paulo",
      email: "contato.marcosps@gmail.com",
      text: "Teste",
    };

    cy.fillMandatoryFieldsAndSubmit();

    cy.get(".success").should("be.visible");
  });
});
