
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // 假设您的 Express 应用在 index.js 中

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return status 200 and the homepage', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });
});
