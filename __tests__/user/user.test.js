import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'cleidison barradas',
        email: 'cleidisonalmei@hotmail.com',
        password: '123456',
      });

    expect(response.body).toHaveProperty('_id');
  });
  it('should be able login', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'cleidisonalmei@hotmail.com',
        password: '123456',
      });

    expect(response.body).toHaveProperty('token');
  });
});
