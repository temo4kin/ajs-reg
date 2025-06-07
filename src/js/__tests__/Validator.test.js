import { Validator } from '../app.js';

describe('Validator.validateUsername', () => {
  const validator = new Validator();

  test('Valid username', () => {
    expect(validator.validateUsername('username')).toBe(true);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('use44rname')).toBe(true);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('user-name')).toBe(true);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('user_name')).toBe(true);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('4username')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('username4')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('-username')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('_username')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('username-')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('username_')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('1234username')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('username1234')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('user1234name')).toBe(false);
  });

  test('Valid username', () => {
    expect(validator.validateUsername('user.name')).toBe(false);
  });
});
