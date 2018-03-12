import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const log = login('qualquercoisa');
  expect(log).toEqual({
    type: 'LOGIN',
    uid: 'qualquercoisa'
  });
});

test('should generate logout action object', () => {
  const log = logout('qualquercoisa');
  expect(log).toEqual({
    type: 'LOGOUT'
  });
});