import { formatPhoneNumber } from '../app.js';

describe('formatPhoneNumber', () => {

  // Российские номера (начинаются с 8 или +7)

  test('Форматируем российские номера', () => {
    expect(formatPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
  });

  test('Форматируем российские номера', () => {
    expect(formatPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
  });

  test('Форматируем российские номера', () => {
    expect(formatPhoneNumber('7 123 456 7890')).toBe('+71234567890');
  });

  // Международные номера (начинаются с +)

  test('Форматируем международные номера', () => {
    expect(formatPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
  });

  test('Форматируем международные номера', () => {
    expect(formatPhoneNumber('+1 (123) 456-7890')).toBe('+11234567890');
  });

  // Граничные случаи

  test('Форматируем номера без пробелов и разделителей', () => {
    expect(formatPhoneNumber('89270000000')).toBe('+79270000000');
  });

  test('Форматируем номера без пробелов и разделителей', () => {
    expect(formatPhoneNumber('+79600000000')).toBe('+79600000000');
  });

  // Номера с нестандартными символами

  test('Игнорирует нечисловые символы (кроме +)', () => {
    expect(formatPhoneNumber('8-927-000-00-00')).toBe('+79270000000');
  });

  test('Игнорирует нечисловые символы (кроме +)', () => {
    expect(formatPhoneNumber('+7 (960) 000 00 00')).toBe('+79600000000');
  });

  // Номер не распознан
  test('Нераспознанный номер', () => {
    expect(formatPhoneNumber('8Hello')).toBeNull();
  });

  test('Нераспознанный номер', () => {
    expect(formatPhoneNumber('Hello885')).toBeNull();
  })
});
