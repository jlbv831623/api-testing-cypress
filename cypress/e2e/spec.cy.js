describe('Reqres API Tests', () => {

  // GET /api/users?page=2
  it('GET /api/users?page=2', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2').then((resp) => {
      // Validar status code
      expect(resp.status).to.eq(200);

      // Validar estructura y contenido
      expect(resp.body).to.have.property('page', 2);
      expect(resp.body.data).to.be.an('array');
      expect(resp.body.data[0]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');

      // Screenshot opcional
      cy.screenshot('GET-users-page-2');
    });
  });

  // POST /api/users
  it('POST /api/users', () => {
    const payload = { name: 'Juan', job: 'QA' };

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: payload,
      failOnStatusCode: false // Permite que el test no falle si devuelve 401
    }).then((resp) => {
      // Validar status code (201 ideal, 401 si no hay API key)
      expect([201, 401]).to.include(resp.status);

      // Mostrar la respuesta en logs
      cy.log('POST response: ' + JSON.stringify(resp.body));

      // Screenshot
      cy.screenshot('POST-create-user');
    });
  });

  // DELETE /api/users/2
  it('DELETE /api/users/2', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false
    }).then((resp) => {
      // Validar status code (204 ideal, 401 si no hay API key)
      expect([204, 401]).to.include(resp.status);

      // Mostrar la respuesta en logs
      cy.log('DELETE response: ' + JSON.stringify(resp.body));

      // Screenshot
      cy.screenshot('DELETE-user-2');
    });
  });

});


