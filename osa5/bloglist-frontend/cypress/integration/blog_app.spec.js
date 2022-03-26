beforeEach(function () {
  cy.request("POST", "http://localhost:3003/api/testing/reset");
  const user = { name: "Jyrki Mäki", username: "jmm", password: "salainen" };
  cy.request("POST", "http://localhost:3003/api/users/", user);
  cy.visit("http://localhost:3000");
});

describe("Blog app", function () {
  it("Login form is shown", function () {
    cy.visit("http://localhost:3000");
    cy.contains("username");
    cy.contains("password");
    cy.contains("login");
  });

  describe("Login", function () {
    it("user can log in", function () {
      cy.get("#username").type("jmm");
      cy.get("#password").type("salainen");
      cy.get("#login-button").click();

      cy.contains("Jyrki Mäki logged in");
    });

    it("login fails with wrong username", function () {
      cy.get("#username").type("jmm123");
      cy.get("#password").type("wrong");
      cy.get("#login-button").click();

      cy.contains("wrong username or password");
    });

    it("login fails with wrong password", function () {
      cy.get("#username").type("jmm");
      cy.get("#password").type("wrong");
      cy.get("#login-button").click();

      cy.contains("wrong username or password");
    });
  });

  it("a new blog can be created", function () {
    cy.get("#username").type("jmm");
    cy.get("#password").type("salainen");
    cy.get("#login-button").click();

    cy.contains("add blog").click();
    cy.get("#title").type("cypressBlog");
    cy.get("#author").type("cypress");
    cy.get("#url").type("url12");
    cy.contains("create").click();
    cy.contains("a new blog added cypressBlog by cypress");
  });

  it("a new blog can be created and liked", function () {
    cy.get("#username").type("jmm");
    cy.get("#password").type("salainen");
    cy.get("#login-button").click();

    cy.contains("add blog").click();
    cy.get("#title").type("cypressBlog");
    cy.get("#author").type("cypress");
    cy.get("#url").type("url12");
    cy.contains("create").click();
    cy.contains("a new blog added cypressBlog by cypress");

    cy.wait(10);
    cy.contains("view").click();
    cy.wait(10);
    cy.contains("like").click();
    cy.contains("likes 1");
  });
});

describe("when logged in", function () {
  beforeEach(() => {
    cy.get("#username").type("jmm");
    cy.get("#password").type("salainen");
    cy.get("#login-button").click();
  });

  it("a new blog can be created", function () {
    cy.contains("add blog").click();
    cy.get("#title").type("cypressBlog");
    cy.get("#author").type("cypress");
    cy.get("#url").type("url12");
    cy.contains("create").click();
    cy.contains("a new blog added cypressBlog by cypress");
  });

  it("a new blog can be created and liked", function () {
    cy.contains("add blog").click();
    cy.get("#title").type("cypressBlog");
    cy.get("#author").type("cypress");
    cy.get("#url").type("url12");
    cy.contains("create").click();
    cy.contains("a new blog added cypressBlog by cypress");

    cy.wait(100);
    cy.contains("view").click();
    cy.wait(100);
    cy.contains("like").click();
    cy.contains("likes 1");
  });

  it("a new blog can be created and removed", function () {
    cy.contains("add blog").click();
    cy.get("#title").type("cypressBlog");
    cy.get("#author").type("cypress");
    cy.get("#url").type("url12");
    cy.contains("create").click();
    cy.contains("a new blog added cypressBlog by cypress");

    cy.wait(1000);
    cy.contains("remove").click();
    cy.wait(1000);
    cy.contains("cypressBlog").not;
  });
});
