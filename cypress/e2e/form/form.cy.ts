beforeEach(() => {
  cy.visit('/form');
});

const userData = {
  name: 'John',
  date: '1993-02-05',
  cars: 'volvo',
  sex: 'male',
  file: {
    contents: Cypress.Buffer.from('file contents'),
    fileName: 'file.jpg',
    mimeType: 'image/jpg',
    lastModified: Date.now(),
  },
};
describe('Form spec', () => {
  it('Should got page title', () => {
    cy.contains('h2', /form/i);
  });

  it('Should got focus on name input', () => {
    cy.focused().should('have.id', 'name');
  });

  it('accept name input', () => {
    cy.get('#name').type(userData.name).should('have.value', userData.name);
  });

  it('accept date input', () => {
    cy.get('#date').type(userData.date).should('have.value', userData.date);
  });

  it('accept select car choose', () => {
    cy.get('#cars').select(userData.cars).should('have.value', userData.cars);
  });

  it('accept policy choose', () => {
    cy.get('#policy').click().should('be.checked');
  });

  it('accept sex choose', () => {
    cy.get('[type="radio"]').check(userData.sex).should('have.value', userData.sex);
  });

  it('accept avatar input', () => {
    cy.get('#avatar')
      .selectFile(userData.file)
      .then(($input) => {
        const input = $input[0] as HTMLInputElement;
        const fileList = input.files![0];
        expect(fileList.name).to.eq(userData.file.fileName);
        expect(fileList.type).to.eq(userData.file.mimeType);
      });
  });
});

describe('Check form validation', () => {
  it('should gave errors with submit with out values', () => {
    cy.get('button[type=submit]').click();
    cy.get('form > p').should('have.length', 5);
  });
});

describe('Check form submit', () => {
  it('Should submit form with all data valid', () => {
    cy.get('#name').type(userData.name).as('name');
    cy.get('#date').type(userData.date).as('date');
    cy.get('#cars').select(userData.cars).as('cars');
    cy.get('#policy').click().as('policy');
    cy.get('[type="radio"]').check(userData.sex).as('sex');
    cy.get('#avatar').selectFile(userData.file).as('avatar');
    cy.get('button[type=submit]').click();
    cy.get('h2')
      .contains(/Card successful create/i)
      .as('title');
    cy.get('button[type=button]').click();
    // check form values reset
    cy.get('@title').should('be.hidden');
    cy.get('@name').should('have.value', '');
    cy.get('@date').should('have.value', '');
    cy.get('@cars').should('have.value', 'volvo');
    cy.get('@policy').should('not.be.checked');
    cy.get('@sex').should('not.be.checked');
    cy.get('@avatar').should('have.value', '');
    // check created card
    cy.contains('div', userData.name);
    cy.contains('div', userData.date);
    cy.contains('div', userData.sex);
    cy.contains('div', userData.cars);
    cy.get(`img[alt=${userData.name}]`).should('be.ok');
  });
});
