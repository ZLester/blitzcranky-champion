const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../server/server.js');

chai.use(chaiHttp);

describe('Server Functionality', () => {

  it('should exist', () => {
    expect(app).to.exist;
  });

  it('should run in development when testing', () => {
    expect(app.settings.env).to.equal('development');
  });

  it('should serve the 10 current free champions on a GET to /api/champions', done => {
    chai.request(app)
      .get('/api/champions')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.ok).to.equal(true);
        expect(res.body.length).to.equal(10);
        done();
      });
  });
});
