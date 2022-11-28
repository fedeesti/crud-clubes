import request from 'supertest';
import app from '../app';
import teams from '../../data/equipos.json';

describe('GET teams list', () => {
  test('teams are returned as json', async () => {
    await request(app)
      .get('/api/v1/teams')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect((res) => {
        expect(res.body).toHaveLength(teams.length);
        expect(res.body[0]).toEqual(teams[0]);
      });
  });
});
